import { ThreeCircles } from 'react-loader-spinner';
import './loader.scss';

export const Loader = () => {
	return (
		<div className='loader'>
			<ThreeCircles
				height='100'
				width='100'
				color='#EA7C69'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel='three-circles-rotating'
				outerCircleColor=''
				innerCircleColor=''
				middleCircleColor=''
			/>
		</div>
	);
};
