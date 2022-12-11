import { Input } from '../Input/Input';
import './header.scss';

export const Header = () => {
	return (
		<div className='site-header'>
			<div className='site-header__title-wrapper'>
				<h2 className='site-header__title'>Jaegar Resto</h2>
				<p className='site-header__time'>Tuesday, 2 Feb 2021</p>
			</div>
			<label className='site-header__label'>
				<Input
					className='site-header__search'
					type='search'
					placeholder='Search for food, coffe, etc..'
				/>
			</label>
		</div>
	);
};
