import './InputField.css';

const InputField = () => {
	return (
		<div className='InputField'>
			<input type='text' placeholder='Type Here' size={60} />
			<button>Reset</button>
		</div>
	);
};

export default InputField;
