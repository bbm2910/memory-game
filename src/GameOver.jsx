import GameoverImage from '../src/assets/game-over.png';
import WinImage from '../src/assets/win.png';

function GameOver({ isWinner }) {
	const goBackToMainPage = () => {
		window.location.href = '/';
	};

	return (
		<div className='game-over'>
			<h2>{isWinner ? 'Congrats! You Won!' : ''}</h2>
			<img
				src={isWinner ? WinImage : GameoverImage}
				alt=''
				className={`result-image ${
					isWinner ? 'win-image' : 'gameover-image'
				}`}
			/>
			<button onClick={goBackToMainPage}>Restart</button>
		</div>
	);
}

export default GameOver;
