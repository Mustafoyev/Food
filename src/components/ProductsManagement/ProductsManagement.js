import { Link } from 'react-router-dom';
import { Select } from '../Select/Select';
import './productsManagement.scss';

export const ProductsManagement = () => {
	return (
		<div className='products-management'>
			<div className='product__header'>
				<div className='product__header-top'>
					<h2 className='product__header-title'>Products Management</h2>
					<div className='product__select-wrapper'>
						<Select className='product__select'>
							<option value={'Manage Categories'}>Manage Categories</option>
						</Select>
					</div>
				</div>
				<div className='product__header-bottom'>
					<ul className='filter__list product__list'>
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
				</div>
			</div>
			<div className='product__card'>
				<ul className='product__card-list'>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
					<li className='product__card-item'>
						<span className='product__card-item-btn'>+</span>
						<p className='product__card-item-text'>Add new dish</p>
					</li>
				</ul>
			</div>
			<div className='product__btns'>
				<button className='product__btn'>Discard Changes</button>
				<button className='product__btn'>Save Changes</button>
			</div>
		</div>
	);
};
