import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../Data/Accessories";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const RouteHandler = (path) => navigate(path);
	return (
		<motion.div
			className="Dashboard-Sidebar"
			initial={{}}
			animate={{
				width: "55px",
			}}
			exit={{}}
		>
			<div className="logo">
				<HiOutlineAcademicCap color="white" size={45} />
			</div>
			<div className="allRoutes">
				{Routes.map((x) => (
					<div
						onClick={() => RouteHandler(x.path)}
						className="route MF"
						key={x.path}
					>
						{x.icon}
						{location.pathname === x.path && (
							<motion.div
								className="left-border"
								layoutId="leftBorder"
							></motion.div>
						)}
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Sidebar;
