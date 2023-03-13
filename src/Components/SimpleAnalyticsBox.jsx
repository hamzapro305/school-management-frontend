import React from "react";
import { motion } from "framer-motion";

const SimpleAnalyticsBox = ({ value, label }) => {
	return (
		<motion.div
			style={{
				padding: "20px",
				paddingBottom: "50px",
				backgroundColor: "gray",
				borderRadius: ".2rem",
				display: "flex",
				flexDirection: "column",
				gap: "5px",
				alignItems: "flex-end",
				color: "white",
			}}
			className="SimpleAnalyticsBox"
		>
			<div
				style={{ fontWeight: "bolder", fontSize: "20px" }}
				className="value MF"
			>
				{value}
			</div>
			<div className="label MF" style={{ fontSize: "25px" }}>
				{label}
			</div>
		</motion.div>
	);
};

export default SimpleAnalyticsBox;
