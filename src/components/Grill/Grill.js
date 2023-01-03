import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';

export const Grill = () => {
	const [grill, setGrill] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/4')
			.then((res) => setGrill(res.data))
			.catch((err) => console.log(err));
	}, [grill]);

	return (
		<>
			<Card obj={grill} />
		</>
	);
};
