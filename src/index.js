import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext/ModalContext';
import { DishesProvider } from './context/DishesContext/DishesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ModalProvider>
				<DishesProvider>
					<App />
				</DishesProvider>
			</ModalProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
