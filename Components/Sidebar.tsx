"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <motion.aside
            initial={{ width: "55px" }}
            animate={{
                width: isOpen ? "250px" : "55px",
            }}
            className="SideBar"
        >
            <motion.div
                className="head"
            >
                <motion.button
                    transition={{ duration: 5 }}
                    onClick={() => setIsOpen((p) => !p)}
					animate={{
						justifySelf: isOpen ? "100%" : "50%"
					}}
                >
                    {isOpen ? "Close" : "Open"}
                </motion.button>
            </motion.div>
        </motion.aside>
    );
};

export default Sidebar;
