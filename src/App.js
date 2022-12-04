import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './components/pages/Home/Home';
import { Pricebar } from './components/Pricebar/Pricebar';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Pricebar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
