import { Card } from '../../Card/Card';
import { Filter } from '../../Filter/Filter';
import { Header } from '../../Header/Header';
import { Pricebar } from '../../Pricebar/Pricebar';

export const Home = () => {
	return (
		<div>
			<Pricebar />
			<Header />
			<Filter />
			<Card />
		</div>
	);
};
