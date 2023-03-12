import { useNavigate } from "react-router-dom";
import { Routes } from "../Data/Accessories";

const Sidebar = () => {
	const navigate = useNavigate();
	const RouteHandler = (path) => {
		navigate(path);
	};
	return (
		<div className="Dashboard-Sidebar">
			<div className="allRoutes">
				{Routes.map((x) => (
					<div
						onClick={() => RouteHandler(x.path)}
						className="route MF"
						key={x.path}
					>
						<span>{x.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
