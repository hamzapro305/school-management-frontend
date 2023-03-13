import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../Data/Accessories";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const RouteHandler = (path) => navigate(path);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<motion.div
			className="Dashboard-Sidebar"
			initial={{}}
			animate={{
				width: isOpen ? "300px" : "55px",
			}}
			exit={{}}
		>
			<div className="logo" onClick={() => RouteHandler("/")}>
				<HiOutlineAcademicCap color="white" size={45} />
			</div>
			<div className="allRoutes">
				{Routes.map((x) => (
					<div
						onClick={() => RouteHandler(x.path)}
						className="route MF"
						key={x.path}
					>
						<p>{x.icon}</p>
						{location.pathname === x.path && (
							<motion.div
								className="left-border"
								layoutId="leftBorder"
							></motion.div>
						)}
						<AnimatePresence mode="wait">
							{isOpen && (
								<motion.div
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									className="name"
								>
									{x.name}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
			<div className="handler">
				<GiHamburgerMenu
					color="white"
					fontSize={20}
					onClick={() => setIsOpen((p) => !p)}
				/>
			</div>
		</motion.div>
	);
};

export default Sidebar;
