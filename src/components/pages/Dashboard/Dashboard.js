import { DashboardHeader } from '../../DashboardHeader/DashboardHeader';
import { MostOrder } from '../../MostOrder/MostOrder';
import { MostType } from '../../MostType/MostType';
import { OrderReport } from '../../OrderReport/OrderReport';
import { Statistica } from '../../Statistica/Statistica';

export const Dashboard = () => {
	return (
		<>
			<DashboardHeader />
			<Statistica />
			<OrderReport />
			<MostOrder />
			<MostType />
		</>
	);
};
