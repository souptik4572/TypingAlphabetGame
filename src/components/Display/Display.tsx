import './Display.css';
import { DisplayProps } from '../../types/props'

const SUCCESS_CLASS = 'success';
const FAILURE_CLASS = 'failure';

const Display = ({ textValue }: DisplayProps) => {
	return (
		<div className='Display'>
			<h1 className={SUCCESS_CLASS}>{textValue}</h1>
		</div>
	);
};

export default Display;
