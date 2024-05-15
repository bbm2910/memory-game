import Card from './Card';

const CardGrid = ({ cardDeck, handleCardClick }) => {
	if (!cardDeck || cardDeck.length === 0) {
		return <div className='progress'></div>;
	}

	return (
		<div className='card-grid'>
			{cardDeck.map((card) => (
				<Card
					key={card.id}
					id={card.id}
					onCardClick={() => handleCardClick(card.id)}
				/>
			))}
		</div>
	);
};

export default CardGrid;
