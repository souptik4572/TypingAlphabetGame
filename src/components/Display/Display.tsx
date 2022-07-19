import './Display.css';

const SUCCESS_CLASS = 'success';
const FAILURE_CLASS = 'failure';

const Display = () => {
	return (
		<div className='Display'>
			<h1 className={SUCCESS_CLASS}>Success!</h1>
		</div>
	);
};

export default Display;
