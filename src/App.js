import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Sidebar } from './components/Sidebar/Sidebar';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
