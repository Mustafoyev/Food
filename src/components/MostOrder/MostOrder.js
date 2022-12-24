import { Select } from '../Select/Select';
import Cart1 from '../../assets/images/card1.png';
import Cart3 from '../../assets/images/card3.png';
import './mostOrder.scss';

export const MostOrder = () => {
	return (
		<div className='most-order'>
			<div className='most-order__header'>
				<h3 className='most-order__header-title'>Most Ordered</h3>
				<div className='filter__select-wrapper most-order__header-select'>
					<Select className='filter__select'>
						<option value={'Today'}>Today</option>
					</Select>
				</div>
			</div>
			<div className='most-order__content'>
				<ul className='most-order__content-list'>
					<li className='most-order__content-item'>
						<img
							className='most-order__content-itemimg'
							src={Cart1}
							alt='foot'
							width={56}
							height={56}
						/>
						<div className='most-order__content-itemwra'>
							<p className='most-order__content-itemtext'>
								Spicy seasoned seafood noodles
							</p>
							<p className='most-order__content-itemordertext'>
								200 dishes ordered
							</p>
						</div>
					</li>
					<li className='most-order__content-item'>
						<img
							className='most-order__content-itemimg'
							src={Cart3}
							alt='foot'
							width={56}
							height={56}
						/>
						<div className='most-order__content-itemwra'>
							<p className='most-order__content-itemtext'>
								Beef dumpling in hot and sour soup
							</p>
							<p className='most-order__content-itemordertext'>
								80 dishes ordered
							</p>
						</div>
					</li>
				</ul>
				<button className='most-order__content-btn'>View All</button>
			</div>
		</div>
	);
};
