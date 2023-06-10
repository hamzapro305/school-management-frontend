"use client";

import Routes from "@/Data/Routes";
import { ArrElement } from "@/Types/UtilTypes";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [HoveredRoute, setHoveredRoute] =
        useState<ArrElement<typeof Routes>>();
    return (
        <motion.aside
            initial={{ width: "55px" }}
            animate={{
                width: isOpen ? "250px" : "55px",
            }}
            className="SideBar"
        >
            <motion.div className="head">
                <motion.button
                    transition={{ duration: 5 }}
                    onClick={() => setIsOpen((p) => !p)}
                    animate={{
                        justifySelf: isOpen ? "100%" : "50%",
                    }}
                >
                    {isOpen ? "Close" : "Open"}
                </motion.button>
            </motion.div>
            <motion.div className={`routes ${isOpen ? "active" : ""}`}>
                {Routes.map((Route) => (
                    <Link href={Route.path} className="route" key={Route.path} onMouseEnter={() => setHoveredRoute(Route)}>
                        <div className="icon">
                            {<Route.icon fontSize={23} />}
                        </div>
                        {HoveredRoute?.path == Route.path && (
                            <motion.div className="bg" layoutId="route_bg">

                            </motion.div>
                        )}
                        <AnimatePresence mode="wait">
                            {isOpen && (
                                <motion.div
                                    exit={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    className="text"
                                >
                                    {Route.name}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Link>
                ))}
            </motion.div>
        </motion.aside>
    );
};

export default Sidebar;
