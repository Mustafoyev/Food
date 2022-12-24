import { ApexChart } from '../Apexchart/Apexchart';
import { Select } from '../Select/Select';
import './mostType.scss';

export const MostType = () => {
	return (
		<div className='most-type'>
			<div className='most-type__header'>
				<h3 className='most-type__header-title'>Most Type of Order</h3>
				<div className='filter__select-wrapper most-type__header-select'>
					<Select className='filter__select'>
						<option value={'Today'}>Today</option>
					</Select>
				</div>
			</div>
			<div className='most-type__appexcharts'>
				<ApexChart />
				<ul className='most-type__list'>
					<li className='most-type__item'>
						<span className='most-type__item-circle'></span>
						<div className='most-type__item-wrapper'>
							<h4 className='most-type__item-title'>Dine In</h4>
							<p className='most-type__item-text'>200 customers</p>
						</div>
					</li>
					<li className='most-type__item'>
						<span className='most-type__item-circle'></span>
						<div className='most-type__item-wrapper'>
							<h4 className='most-type__item-title'>To Go</h4>
							<p className='most-type__item-text'>122 customers</p>
						</div>
					</li>
					<li className='most-type__item'>
						<span className='most-type__item-circle'></span>
						<div className='most-type__item-wrapper'>
							<h4 className='most-type__item-title'>Delivery</h4>
							<p className='most-type__item-text'>264 customers</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
