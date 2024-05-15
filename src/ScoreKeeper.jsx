const ScoreKeeper = ({ currentScore }) => {
	return (
		<div className='score-keeper'>
			<div className='score'>
				<span>Current Score: </span>
				<span>{currentScore}</span>
			</div>
		</div>
	);
};

export default ScoreKeeper;
