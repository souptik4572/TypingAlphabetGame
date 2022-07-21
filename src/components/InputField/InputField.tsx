import { useEffect, useRef } from 'react';
import './InputField.css';

type InputFieldProps = {
	isGameRunning: boolean;
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleGameReset: () => void;
};

const InputField = ({ isGameRunning, value, handleChange, handleGameReset }: InputFieldProps) => {
	const charInput = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (charInput.current) charInput.current.focus();
	}, [value]);
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
