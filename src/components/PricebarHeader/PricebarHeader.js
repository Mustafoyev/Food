import { Link } from 'react-router-dom';
import './pricebarHeader.scss';

export const PricebarHeader = () => {
	return (
		<div className='pricebar-header'>
			<h3 className='pricebar-header__title'>Orders #34562</h3>
			<div className='pricebar-header__links'>
				<Link className='pricebar-header__link' to={''}>
					Dine In
				</Link>
				<Link className='pricebar-header__link' to={''}>
					To Go
				</Link>
				<Link className='pricebar-header__link' to={''}>
					Delivery
				</Link>
			</div>
			<div className='pricebar-header__bottom'>
				<span className='pricebar-header__bottom-item'>Item</span>
				<div className='pricebar-header__bottom-wrapper'>
					<span className='pricebar-header__bot-item'>Qty</span>
					<span className='pricebar-header__bot-item'>Price</span>
				</div>
			</div>
		</div>
	);
};
