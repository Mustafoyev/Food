import axios from 'axios';
import { useEffect, useState } from 'react';
import { SettingsCard } from '../SettingsCard/SettingsCard';

export const SettingsSoup = () => {
	const [soup, setSoup] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/food/3')
			.then((res) => setSoup(res.data))
			.catch((err) => console.log(err));
	}, [soup]);

	return (
		<>
			<SettingsCard obj={soup} />
		</>
	);
};
