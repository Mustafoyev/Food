import { Outlet } from 'react-router-dom';
import { Filter } from '../../Filter/Filter';
import { Header } from '../../Header/Header';
import { Pricebar } from '../../Pricebar/Pricebar';

export const Home = () => {
	return (
		<div>
			<Pricebar />
			<Header />
			<Filter />
			<Outlet />
		</div>
	);
};
