import { Route, Routes } from 'react-router-dom';
import { Filter } from '../../Filter/Filter';
import { Header } from '../../Header/Header';
import { Pricebar } from '../../Pricebar/Pricebar';
import { HotDishes } from '../../HotDishes';
import { CoolDishes } from '../../CoolDishes';
import { Soup } from '../../Soup';
import { Grill } from '../../Grill';
import { Appetizer } from '../../Appetizer';
import { Dessert } from '../../Dessert';

export const Home = () => {
	return (
		<div>
			<Pricebar />
			<Header />
			<Filter />
			<Routes>
				<Route index element={<HotDishes />} />
				<Route path='cool-dishes' element={<CoolDishes />} />
				<Route path='soup' element={<Soup />} />
				<Route path='grill' element={<Grill />} />
				<Route path='appetizer' element={<Appetizer />} />
				<Route path='dessert' element={<Dessert />} />
			</Routes>
		</div>
	);
};
