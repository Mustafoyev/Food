import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';

export const Dessert = () => {
	const [dessert, setDessert] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/6')
			.then((res) => setDessert(res.data))
			.catch((err) => console.log(err));
	}, [dessert]);

	return (
		<>
			<Card obj={dessert} />
		</>
	);
};
