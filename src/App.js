import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import { Home } from './components/pages/Home/Home';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
