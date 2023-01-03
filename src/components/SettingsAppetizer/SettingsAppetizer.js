import axios from 'axios';
import { useEffect, useState } from 'react';
import { SettingsCard } from '../SettingsCard/SettingsCard';

export const SettingsAppetizer = () => {
	const [appetizer, setAppetizer] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/5')
			.then((res) => setAppetizer(res.data))
			.catch((err) => console.log(err));
	}, [appetizer]);

	return (
		<>
			<SettingsCard obj={appetizer} />
		</>
	);
};
