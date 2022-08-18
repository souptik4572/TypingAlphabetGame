import { useEffect, useState } from 'react';
import { getNextChar } from '../../utils/getNextChar';
import Display from '../Display/Display';
import InputField from '../InputField/InputField';
import { CurrentCharState, TimerState } from '../../types/state';
import { startTimer, stopTimer } from '../../utils/timer';
import './Game.css';

const MAX_CHAR_COUNT = 5;

const getCurrentChar = (
	isGameRunning: boolean,
	previousCurrentChar: CurrentCharState,
	isLastMatching: boolean = true
): CurrentCharState => {
	if (isGameRunning)
		return {
			char: getNextChar(previousCurrentChar.char),
			remCharCount: previousCurrentChar.remCharCount - 1,
		};
	if (!isGameRunning && !isLastMatching) {
		console.log(previousCurrentChar);
		return {
			char: 'Failure!',
			remCharCount: 0,
		};
	}
	return {
		char: 'Success!',
		remCharCount: 0,
	};
};

const getFreshCurrentChar = (): CurrentCharState => ({
	char: getNextChar(),
	remCharCount: MAX_CHAR_COUNT,
});

const Game = () => {
	const [isGameRunning, setIsGameRunning] = useState<boolean>(true);
	const [inputValue, setInputValue] = useState<string>('');
	const [currentChar, setCurrentChar] = useState<CurrentCharState>(getFreshCurrentChar());
	const [timer, setTimer] = useState<TimerState>({
		timeMs: 0,
		isActive: false,
		intervalId: null,
	});
	useEffect(() => {
		if (currentChar.remCharCount === MAX_CHAR_COUNT - 1) {
			const intervalId = startTimer(setTimer);
			setTimer((timer) => ({ ...timer, intervalId }));
		} else if (currentChar.remCharCount === 0) {
			stopTimer(timer.intervalId);
		}
	}, [currentChar.remCharCount]);
	const handleInputFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.target.value = event.target.value.toUpperCase();
		setInputValue(event.target.value);
		const isLastMatching = event.target.value.slice(-1) === currentChar.char;
		if (isLastMatching) {
			if (currentChar.remCharCount === 1) {
				setIsGameRunning(false);
				setCurrentChar(getCurrentChar(false, currentChar));
				return;
			}
			setCurrentChar((previousCurrentChar) => {
				return getCurrentChar(isGameRunning, previousCurrentChar);
			});
		} else {
			setIsGameRunning(false);
			stopTimer(timer.intervalId);
			setCurrentChar(getCurrentChar(false, currentChar, isLastMatching));
		}
	};
	const handleGameReset = (): void => {
		setInputValue('');
		setCurrentChar(getFreshCurrentChar());
		setIsGameRunning(true);
	};
	return (
		<div className='Game'>
			<h1>Type The Alphabet</h1>
			<p>Typing game to see how fast you type</p>
			<p>Timer starts when you do 😁</p>
			<Display textValue={currentChar.char} />
			<p>Time: {timer.timeMs}s</p>
			<p>My best time: 1.39s!</p>
			<InputField
				isGameRunning={isGameRunning}
				value={inputValue}
				handleGameReset={handleGameReset}
				handleChange={handleInputFieldChange}
			/>
		</div>
	);
};

export default Game;
