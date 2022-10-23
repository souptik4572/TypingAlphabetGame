import { useEffect, useRef, FC } from 'react';
import './InputField.css';
import { InputFieldProps } from '../../types/props';

const InputField: FC<InputFieldProps> = ({
	isGameRunning,
	value,
	currentChar,
	handleChange,
	handleGameReset,
}) => {
	const charInput = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (charInput.current) charInput.current.focus();
	}, [currentChar]);
	return (
		<div className='InputField'>
			<input
				type='text'
				placeholder='Type Here'
				size={60}
				value={value}
				onChange={handleChange}
				ref={charInput}
				disabled={!isGameRunning}
			/>
			<button
				onClick={() => {
					handleGameReset();
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default InputField;
