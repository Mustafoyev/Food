import { useContext } from 'react';
import './pricebarFooter.scss';
import { ModalContext } from '../../context/ModalContext/ModalContext';

export const PricebarFooter = () => {
	const { setModal } = useContext(ModalContext);
	return (
		<div className='pricebar-footer'>
			<div className='pricebar-footer__discount'>
				<p className='pricebar-footer__discount-text'>Discount</p>
				<span className='pricebar-footer__discount-result'>$0</span>
			</div>
			<div className='pricebar-footer__subtotal'>
				<p className='pricebar-footer__subtotal-text'>Sub total</p>
				<span className='pricebar-footer__subtotal-result'> $ 21,03</span>
			</div>
			<button onClick={() => setModal(true)} className='pricebar-footer__btn'>
				Continue to Payment
			</button>
		</div>
	);
};
