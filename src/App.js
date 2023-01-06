import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import { Home } from './components/pages/Home/Home';
import { Settings } from './components/pages/Settings/Settings';
import { Sidebar } from './components/Sidebar/Sidebar';
import { HotDishes } from './components/HotDishes';
import { CoolDishes } from './components/CoolDishes';
import { Soup } from './components/Soup';
import { Grill } from './components/Grill';
import { Appetizer } from './components/Appetizer';
import { Dessert } from './components/Dessert';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home/*' element={<Home />}>
					<Route index element={<HotDishes />} />
					<Route path='cool-dishes' element={<CoolDishes />} />
					<Route path='soup' element={<Soup />} />
					<Route path='grill' element={<Grill />} />
					<Route path='appetizer' element={<Appetizer />} />
					<Route path='dessert' element={<Dessert />} />
				</Route>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/settings/*' element={<Settings />} />
			</Routes>
		</div>
	);
}

export default App;
