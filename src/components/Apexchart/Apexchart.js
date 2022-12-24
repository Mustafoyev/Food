import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const ApexChart = () => {
	const [state, setState] = useState({
		series: [76, 48, 67, 0],
		options: {
			chart: {
				height: 350,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '22px',
						},
						value: {
							fontSize: '16px',
						},
					},
				},
			},
			colors: ['#65B0F6', '#FFB572', '#FF7CA3'],
			grid: {
				padding: {
					right: 40,
				},
			},
		},
	});

	return (
		<div id='chart'>
			<ReactApexChart
				options={state.options}
				series={state.series}
				type='radialBar'
				width={200}
				height={200}
			/>
		</div>
	);
};
