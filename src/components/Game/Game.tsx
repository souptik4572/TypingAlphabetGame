import { useState } from 'react';
import { getNextChar } from '../../utils/getNextChar';
import Display from '../Display/Display';
import InputField from '../InputField/InputField';
import Utility from '../Utility/Utility';
import './Game.css';

const MAX_CHAR_COUNT = 5;

const Game = () => {
	const [isGameRunning, setIsGameRunning] = useState<boolean>(true);
	const [inputValue, setInputValue] = useState<string>('');
	const [currentChar, setCurrentChar] = useState({
		char: getNextChar(),
		remCharCount: MAX_CHAR_COUNT,
	});
	const handleInputFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.target.value = event.target.value.toUpperCase();
		setInputValue(event.target.value);
		if (event.target.value.slice(-1) === currentChar.char) {
			if (currentChar.remCharCount === 1) setIsGameRunning(false);
			setCurrentChar((previousCurrentChar) => {
				return {
					char: getNextChar(previousCurrentChar.char),
					remCharCount: previousCurrentChar.remCharCount - 1,
				};
			});
		}
	};
	const handleGameReset = (): void => {
		setInputValue('');
		setCurrentChar({
			char: getNextChar(),
			remCharCount: MAX_CHAR_COUNT,
		});
		setIsGameRunning(true);
	};
	return (
		<div className='Game'>
			<h1>Type The Alphabet</h1>
			<p>Typing game to see how fast you type</p>
			<p>Timer starts when you do 😁</p>
			<Utility />
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
