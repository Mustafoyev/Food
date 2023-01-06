import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AddModal } from '../AddModal/AddModal';
import { Select } from '../Select/Select';
import { SettingsAppetizer } from '../SettingsAppetizer/SettingsAppetizer';
import { SettingsCool } from '../SettingsCool/SettingsCool';
import { SettingsDessert } from '../SettingsDessert/SettingsDessert';
import { SettingsGrill } from '../SettingsGrill/SettingsGrill';
import { SettingsHot } from '../SettingsHot/SettingsHot';
import { SettingsSoup } from '../SettingsSoup/SettingsSoup';
import './productsManagement.scss';

export const ProductsManagement = () => {
	const [addModal, setAddModal] = useState(false);

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
							<NavLink
								className={({ isActive }) =>
									isActive ? 'filter__item-linkactive' : 'filter__item-link'
								}
								to={'/settings/products-management'}
								end>
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
				</div>
			</div>
			<div className='product__card'>
				<div className='product__card-item' onClick={() => setAddModal(true)}>
					<span className='product__card-item-btn'>+</span>
					<p className='product__card-item-text'>Add new dish</p>
				</div>
				<Routes>
					<Route index element={<SettingsHot />} />
					<Route path='cool-dishes' element={<SettingsCool />} />
					<Route path='soup' element={<SettingsSoup />} />
					<Route path='grill' element={<SettingsGrill />} />
					<Route path='appetizer' element={<SettingsAppetizer />} />
					<Route path='dessert' element={<SettingsDessert />} />
				</Routes>
			</div>
			{addModal && <AddModal setAddModal={setAddModal} />}
		</div>
	);
};
