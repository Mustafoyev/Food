import './card.scss';

export const Card = () => {
	const dishes = [
		{
			name: 'Spicy seasoned seafood noodles',
			price: '$ 2.29',
			text: '20 Bowls available',
		},
		{
			name: 'Salted Pasta with mushroom sauce',
			price: '$ 2.69',
			text: '11 Bowls available',
		},
		{
			name: 'Beef dumpling in hot and sour soup',
			price: '$ 2.99',
			text: '16 Bowls available',
		},
		{
			name: 'Healthy noodle with spinach leaf',
			price: '$ 3.29',
			text: '22 Bowls available',
		},
		{
			name: 'Hot spicy fried rice with omelet',
			price: '$ 3.49',
			text: '13 Bowls available',
		},
		{
			name: 'Spicy instant noodle with special omelette',
			price: '$ 3.59',
			text: '17 Bowls available',
		},
		{
			name: 'Spicy seasoned seafood noodles',
			price: '$ 2.29',
			text: '20 Bowls available',
		},
		{
			name: 'Salted Pasta with mushroom sauce',
			price: '$ 2.69',
			text: '11 Bowls available',
		},
		{
			name: 'Beef dumpling in hot and sour soup',
			price: '$ 2.99',
			text: '16 Bowls available',
		},
		{
			name: 'Healthy noodle with spinach leaf',
			price: '$ 3.29',
			text: '22 Bowls available',
		},
		{
			name: 'Hot spicy fried rice with omelet',
			price: '$ 3.49',
			text: '13 Bowls available',
		},
		{
			name: 'Spicy instant noodle with special omelette',
			price: '$ 3.59',
			text: '17 Bowls available',
		},
	];
	return (
		<div className='card'>
			{dishes.length ? (
				<ul className='card__list'>
					{dishes.map((el) => (
						<li className='card__item'>
							<h3 className='card__item-title'>{el.name}</h3>
							<span className='card__item-price'>{el.price}</span>
							<p className='card__item-text'>{el.text}</p>
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
};
