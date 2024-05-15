import { useState, useEffect } from 'react';

const Card = ({ id, onCardClick }) => {
	const [cardData, setCardData] = useState(null);

	useEffect(() => {
		const fetchImageData = async () => {
			const imageUrl = `src/assets/image${id}.png`;

			setCardData({
				imageUrl: imageUrl,
				text: `Image ${id}`,
			});
		};

		fetchImageData();
	}, [id]);

	if (!cardData) {
		return <div className='progress'></div>;
	}

	return (
		<div className='card' onClick={onCardClick}>
			<img src={cardData.imageUrl} />
		</div>
	);
};

export default Card;
