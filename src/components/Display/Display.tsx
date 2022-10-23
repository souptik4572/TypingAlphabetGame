import { FC } from 'react';
import './Display.css';
import { DisplayProps } from '../../types/props';

const SUCCESS_CLASS = 'success';
const FAILURE_CLASS = 'failure';

const Display: FC<DisplayProps> = ({ textValue }) => {
	return (
		<div className='Display'>
			<h1 className={textValue !== 'Failure!' ? SUCCESS_CLASS : FAILURE_CLASS}>
				{textValue}
			</h1>
		</div>
	);
};

export default Display;
