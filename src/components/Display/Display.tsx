import { getNextChar } from '../../utils/getNextChar';

import './Display.css';

const SUCCESS_CLASS = 'success';
const FAILURE_CLASS = 'failure';

type DisplayProps = {
	textValue: string;
};

const Display = ({ textValue }: DisplayProps) => {
	return (
		<div className='Display'>
			<h1 className={SUCCESS_CLASS}>{textValue}</h1>
		</div>
	);
};

export default Display;
