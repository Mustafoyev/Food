import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '../Card/Card';

export const Soup = () => {
	const [soupDishes, setSoupDishes] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/3')
			.then((res) => setSoupDishes(res.data))
			.catch((err) => console.log(err));
	}, [soupDishes]);

	return (
		<>
			<Card obj={soupDishes} />
		</>
	);
};
