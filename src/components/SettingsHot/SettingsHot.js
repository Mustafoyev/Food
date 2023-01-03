import axios from 'axios';
import { useEffect, useState } from 'react';
import { SettingsCard } from '../SettingsCard/SettingsCard';

export const SettingsHot = () => {
	const [hotDishes, setHotDishes] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/1')
			.then((res) => setHotDishes(res.data))
			.catch((err) => console.log(err));
	}, [hotDishes]);

	return (
		<>
			<SettingsCard obj={hotDishes} />
		</>
	);
};
