import { NavLink } from 'react-router-dom';
import { Select } from '../Select/Select';
import './filter.scss';

export const Filter = () => {
	return (
		<div className='filter'>
			<ul className='filter__list'>
				<li className='filter__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'filter__item-linkactive' : 'filter__item-link'
						}
						to={'/'}>
						Hot Dishes
					</NavLink>
				</li>
				<li className='filter__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'filter__item-linkactive' : 'filter__item-link'
						}
						to={'cool-dishes'}>
						Cold Dishes
					</NavLink>
				</li>
				<li className='filter__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'filter__item-linkactive' : 'filter__item-link'
						}
						to={'soup'}>
						Soup
					</NavLink>
				</li>
				<li className='filter__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'filter__item-linkactive' : 'filter__item-link'
						}
						to={'grill'}>
						Grill
					</NavLink>
				</li>
				<li className='filter__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'filter__item-linkactive' : 'filter__item-link'
						}
						to={'appetizer'}>
						Appetizer
					</NavLink>
				</li>
				<li className='filter__item'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'filter__item-linkactive' : 'filter__item-link'
						}
						to={'dessert'}>
						Dessert
					</NavLink>
				</li>
			</ul>
			<div className='filter__select-dishes'>
				<h3 className='filter__select-title'>Choose Dishes</h3>
				<div className='filter__select-wrapper'>
					<Select className='filter__select'>
						<option value={'Dine In'}>Dine In</option>
					</Select>
				</div>
			</div>
		</div>
	);
};
