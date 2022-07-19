import Display from '../Display/Display';
import InputField from '../InputField/InputField';
import Utility from '../Utility/Utility';
import './Game.css';

const Game = () => {
	return (
		<div className='Game'>
			<h1>Type The Alphabet</h1>
			<p>Typing game to see how fast you type</p>
			<p>Timer starts when you do 😁</p>
			<Utility />
			<Display />
			<p>Time: 0.000s</p>
			<p>My best time: 1.39s</p>
			<InputField />
		</div>
	);
};

export default Game;
