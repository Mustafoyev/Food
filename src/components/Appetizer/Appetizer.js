import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '../Card/Card';

export const Appetizer = () => {
	const [appetizer, setAppetizer] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/5')
			.then((res) => setAppetizer(res.data))
			.catch((err) => console.log(err));
	}, [appetizer]);

	return (
		<>
			<Card obj={appetizer} />
		</>
	);
};
