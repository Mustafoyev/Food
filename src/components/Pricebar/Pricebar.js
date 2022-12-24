import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import { Payment } from '../Payment/Payment';
import { PricebarFooter } from '../PricebarFooter/PricebarFooter';
import { PricebarHeader } from '../PricebarHeader/PricebarHeader';
import { SelectedCard } from '../SelectedCard/SelectedCard';
import './pricebar.scss';

export const Pricebar = () => {
	const { modal } = useContext(ModalContext);

	if (modal) {
		return <Payment />;
	}
	return (
		<div className='pricebar'>
			<PricebarHeader />
			<SelectedCard />
			<PricebarFooter />
		</div>
	);
};
