import { Card } from '../../Card/Card';
import { Filter } from '../../Filter/Filter';
import { Header } from '../../Header/Header';

export const Home = () => {
	return (
		<div>
			<Header />
			<Filter />
			<Card />
		</div>
	);
};
