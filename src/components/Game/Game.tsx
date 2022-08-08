import { useState } from 'react';
import { getNextChar } from '../../utils/getNextChar';
import Display from '../Display/Display';
import InputField from '../InputField/InputField';
import { CurrentCharState, TimerState } from '../../types/state';
import './Game.css';

const MAX_CHAR_COUNT = 20;

const getCurrentChar = (
	isGameRunning: boolean,
	previousCurrentChar: CurrentCharState
): CurrentCharState => {
	if (isGameRunning)
		return {
			char: getNextChar(previousCurrentChar.char),
			remCharCount: previousCurrentChar.remCharCount - 1,
		};
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
		timeSec: 0,
	});
	const handleInputFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.target.value = event.target.value.toUpperCase();
		setInputValue(event.target.value);
		if (event.target.value.slice(-1) === currentChar.char) {
			if (currentChar.remCharCount === 1) {
				setIsGameRunning(false);
				setCurrentChar(getCurrentChar(false, currentChar));
				return;
			}
			setCurrentChar((previousCurrentChar) => {
				return getCurrentChar(isGameRunning, previousCurrentChar);
			});
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
			<p>Time: 0.000s</p>
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
