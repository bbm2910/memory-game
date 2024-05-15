import { Link } from 'react-router-dom';

const Instructions = () => {
	return (
		<div className='instructions'>
			<h1>How to play</h1>
			<h3>Objective</h3>
			<p>The goal is to score points by clicking on different cards.</p>
			<h3>Gameplay</h3>
			<p>
				On each turn, a player can click on any card to reshuffle all
				cards.
			</p>
			<p>
				If the player clicks on a different card each time, they score a
				point
			</p>
			<p>
				If the player clicks on the same card, the score resets to zero.
			</p>
			<h3>Winning</h3>
			<p>The player wins when they have guessed all the cards.</p>
			<Link to='/memory-game'>Go back to Main Page</Link>
		</div>
	);
};

export default Instructions;
