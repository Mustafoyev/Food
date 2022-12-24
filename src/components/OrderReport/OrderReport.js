import './orderReport.scss';
import { Select } from '../Select/Select';
import Avatar1 from '../../assets/images/Avatar1.svg';
import Avatar2 from '../../assets/images/Avatar2.svg';
import Avatar3 from '../../assets/images/Avatar3.svg';
import Avatar4 from '../../assets/images/Avatar4.svg';
import Avatar5 from '../../assets/images/Avatar5.svg';

export const OrderReport = () => {
	const orders = [
		{
			img: Avatar1,
			name: 'Eren Jaegar',
			text: 'Spicy seasoned seafood noodles ',
			price: '$125',
			status: 'Completed',
		},
		{
			img: Avatar2,
			name: 'Reiner Braunn',
			text: 'Salted Pasta with mushroom sauce',
			price: '$145',
			status: 'Preparing',
		},
		{
			img: Avatar3,
			name: 'Levi Ackerman',
			text: 'Beef dumpling in hot and sour soup',
			price: '$105',
			status: 'Pending',
		},
		{
			img: Avatar4,
			name: 'Historia Reiss',
			text: 'Hot spicy fried rice with omelet',
			price: '$45',
			status: 'Completed',
		},
		{
			img: Avatar5,
			name: 'Hanji Zoe',
			text: 'Hot spicy fried rice with omelet',
			price: '$245',
			status: 'Completed',
		},
		{
			img: Avatar1,
			name: 'Eren Jaegar',
			text: 'Spicy seasoned seafood noodles ',
			price: '$125',
			status: 'Completed',
		},
	];

	return (
		<div className='order-report'>
			<div className='order-report__header'>
				<div className='order-report__header-top'>
					<h3 className='order-report__header-title'>Order Report</h3>
					<div className='order__select-wrapper'>
						<Select className='order__select'>
							<option value={'Filter Order'}>Filter Order</option>
						</Select>
					</div>
				</div>
				<div className='order-report__header-bottom'>
					<p className='order-report__header-bitem'>Customer</p>
					<p className='order-report__header-bitem'>Menu</p>
					<p className='order-report__header-bitem'>Total Payment</p>
					<p className='order-report__header-bitem'>Status</p>
				</div>
			</div>
			<div className='order-report__content'>
				{orders.length ? (
					<ul className='order-report__content-list'>
						{orders.map((el) => (
							<li className='order-item'>
								<img
									className='order-item__img'
									src={el.img}
									alt={el.name}
									width={32}
									height={32}
								/>
								<h4 className='order-item__name'>{el.name}</h4>
								<span className='order-item__text'>{el.text}</span>
								<span className='order-item__price'>{el.price}</span>
								<button
									className={
										el.status == 'Pending'
											? 'order-item__btn pending'
											: el.status == 'Preparing'
											? 'order-item__btn preparing'
											: 'order-item__btn completed'
									}>
									{el.status}
								</button>
							</li>
						))}
					</ul>
				) : (
					''
				)}
			</div>
		</div>
	);
};
