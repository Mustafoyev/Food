import axios from 'axios';
import { useEffect, useState } from 'react';
import { SettingsCard } from '../SettingsCard/SettingsCard';

export const SettingsGrill = () => {
	const [grill, setGrill] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/4')
			.then((res) => setGrill(res.data))
			.catch((err) => console.log(err));
	}, [grill]);

	return (
		<>
			<SettingsCard obj={grill} />
		</>
	);
};
