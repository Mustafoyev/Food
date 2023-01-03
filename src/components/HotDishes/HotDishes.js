import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '../Card/Card';

export const HotDishes = () => {
	const [hotDishes, setHotDishes] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/1')
			.then((res) => setHotDishes(res.data))
			.catch((err) => console.log(err));
	}, [hotDishes]);

	return (
		<>
			<Card obj={hotDishes} />
		</>
	);
};
