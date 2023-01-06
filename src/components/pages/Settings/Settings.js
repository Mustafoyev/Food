import { Route, Routes } from 'react-router-dom';
import { ProductsManagement } from '../../ProductsManagement/ProductsManagement';
import { SettingsMenu } from '../../SettingsMenu/SettingsMenu';

import './settings.scss';

export const Settings = () => {
	return (
		<div className='settings'>
			<h2 className='settings__title'>Settings</h2>
			<SettingsMenu />
			<Routes>
				<Route path='/products-management/*' element={<ProductsManagement />} />
			</Routes>
		</div>
	);
};
