import { useState } from 'react';
import { createContext } from 'react';

export const DishesContext = createContext();

export const DishesProvider = ({ children }) => {
	const [dish, setDish] = useState([]);

	return (
		<DishesContext.Provider value={{ dish, setDish }}>
			{children}
		</DishesContext.Provider>
	);
};
