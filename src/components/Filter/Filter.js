import { Link } from 'react-router-dom';
import './filter.scss';

export const Filter = () => {
	return (
		<div className='filter'>
			<ul className='filter__list'>
				<li className='filter__item'>
					<Link className='filter__item-link' to={''}>
						Hot Dishes
					</Link>
				</li>
				<li className='filter__item'>
					<Link className='filter__item-link' to={''}>
						Cold Dishes
					</Link>
				</li>
				<li className='filter__item'>
					<Link className='filter__item-link' to={''}>
						Soup
					</Link>
				</li>
				<li className='filter__item'>
					<Link className='filter__item-link' to={''}>
						Grill
					</Link>
				</li>
				<li className='filter__item'>
					<Link className='filter__item-link' to={''}>
						Appetizer
					</Link>
				</li>
				<li className='filter__item'>
					<Link className='filter__item-link' to={''}>
						Dessert
					</Link>
				</li>
			</ul>
			<div className='filter__select-dishes'>
				<h3 className='filter__select-title'>Choose Dishes</h3>
				<div className='filter__select-wrapper'>
					<select className='filter__select'>
						<option value={'Dine In'}>Dine In</option>
					</select>
				</div>
			</div>
		</div>
	);
};
