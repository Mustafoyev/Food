import { useContext } from 'react';
import { DishesContext } from '../../context/DishesContext/DishesContext';
import { Loader } from '../Loader/Loader';
import './card.scss';

export const Card = ({ obj }) => {
	const { dish, setDish } = useContext(DishesContext);

	const handleAddDish = (id) => {
		const newDish = obj.filter((el) => el.id === id);
		const [newItem] = newDish;
		setDish([...dish, newItem]);
		console.log(dish);
	};

	return (
		<div className='card'>
			{obj.length ? (
				<ul className='card__list'>
					{obj.map((el) => (
						<li
							data-set-id={el.id}
							className='card__item'
							key={el.id}
							onClick={() => handleAddDish(el.id)}>
							<img
								className='card__item-img'
								src={`http://localhost:5000/${el.image}`}
								alt={el.name}
								width={132}
								height={132}
							/>
							<h3 className='card__item-title'>{el.name}</h3>
							<span className='card__item-price'>$ {el.price}</span>
							<p className='card__item-text'>{el.bowls} Bowls available</p>
						</li>
					))}
				</ul>
			) : (
				<Loader />
			)}
		</div>
	);
};
