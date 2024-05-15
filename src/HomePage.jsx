// HomePage component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardGrid from './CardGrid';
import ScoreKeeper from './ScoreKeeper';
import GameOver from './GameOver';

const HomePage = () => {
	const [cardDeck, setCardDeck] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);

	const initializeCardDeck = (difficulty) => {
		let numberOfCards = 8; // Default difficulty

		if (difficulty === 'medium') {
			numberOfCards = 12;
		} else if (difficulty === 'hard') {
			numberOfCards = 16;
		}

		const initialDeck = Array.from(
			{ length: numberOfCards },
			(_, index) => ({
				isClicked: false,
				id: index + 1,
			})
		);

		setCardDeck(shuffleArray(initialDeck));
		setIsGameOver(false);
	};

	useEffect(() => {
		initializeCardDeck();
	}, []);

	const shuffleArray = (array) => {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	const shuffleCards = () => {
		setCardDeck((prevDeck) => shuffleArray(prevDeck));
	};

	const handleCardClick = (clickedId) => {
		const clickedCard = cardDeck.find((card) => card.id === clickedId);

		if (clickedCard.isClicked) {
			setCurrentScore(0);
			setIsGameOver(true); // Set game over to true when the player loses
		} else {
			setCurrentScore((prevScore) => prevScore + 1);
			clickedCard.isClicked = true;

			if (currentScore === cardDeck.length - 1) {
				setIsGameOver(true); // Set game over to true when the player wins
				// You can also perform other actions here for winning
			}
		}
		shuffleCards();
	};

	return (
		<>
			<div className='instructions-link'>
				<Link to='/memory-game/instructions'>How to play</Link>
				<select
					onChange={(e) => initializeCardDeck(e.target.value)}
					defaultValue='easy'
				>
					<option value='easy'>Easy</option>
					<option value='medium'>Medium</option>
					<option value='hard'>Hard</option>
				</select>
			</div>
			<div>
				{isGameOver ? (
					<GameOver isWinner={currentScore === cardDeck.length} />
				) : (
					<>
						<CardGrid
							cardDeck={cardDeck}
							handleCardClick={handleCardClick}
						/>
						<ScoreKeeper currentScore={currentScore} />
					</>
				)}
			</div>
		</>
	);
};

export default HomePage;
