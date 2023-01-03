import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import { Home } from './components/pages/Home/Home';
import { Settings } from './components/pages/Settings/Settings';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/settings/*' element={<Settings />} />
			</Routes>
		</div>
	);
}

export default App;
