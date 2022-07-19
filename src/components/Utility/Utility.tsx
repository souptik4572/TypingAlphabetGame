import './Utility.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

const Utility = () => {
	return (
		<div className='Utility'>
			<FontAwesomeIcon icon={faPlay} size='2x' />
			<FontAwesomeIcon icon={faArrowRotateRight} size='2x' />
		</div>
	);
};

export default Utility;
