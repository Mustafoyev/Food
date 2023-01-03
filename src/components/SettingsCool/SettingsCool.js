import axios from 'axios';
import { useEffect, useState } from 'react';
import { SettingsCard } from '../SettingsCard/SettingsCard';

export const SettingsCool = () => {
	const [coolDishes, setCoolDishes] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/2')
			.then((res) => setCoolDishes(res.data))
			.catch((err) => console.log(err));
	}, [coolDishes]);

	return (
		<>
			<SettingsCard obj={coolDishes} />
		</>
	);
};
