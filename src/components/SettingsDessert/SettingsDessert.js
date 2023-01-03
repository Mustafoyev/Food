import axios from 'axios';
import { useEffect, useState } from 'react';
import { SettingsCard } from '../SettingsCard/SettingsCard';

export const SettingsDessert = () => {
	const [dessert, setDessert] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/6')
			.then((res) => setDessert(res.data))
			.catch((err) => console.log(err));
	}, [dessert]);

	return (
		<>
			<SettingsCard obj={dessert} />
		</>
	);
};
