import { Route, Routes } from 'react-router-dom';
import { PricebarFooter } from '../PricebarFooter/PricebarFooter';
import { PricebarHeader } from '../PricebarHeader/PricebarHeader';
import { SelectedCard } from '../SelectedCard/SelectedCard';
import './pricebar.scss';

export const Pricebar = () => {
	return (
		<div className='pricebar'>
			<PricebarHeader />
			<SelectedCard />
			<PricebarFooter />
		</div>
	);
};
