"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<motion.aside
			animate={{
				width: isOpen ? "250px" : "55px",
			}}
			className="SideBar"
		></motion.aside>
	);
};

export default Sidebar;
