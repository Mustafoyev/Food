import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '../Card/Card';

export const CoolDishes = () => {
	const [coolDishes, setCoolDishes] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/2')
			.then((res) => setCoolDishes(res.data))
			.catch((err) => console.log(err));
	}, [coolDishes]);

	return (
		<>
			<Card obj={coolDishes} />
		</>
	);
};
