import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ModalProvider>
				<App />
			</ModalProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
