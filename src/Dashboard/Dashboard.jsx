import React from "react";
import Panel from "./Panel";
import Sidebar from "./Sidebar";

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<Sidebar />
			<Panel />
		</div>
	);
};

export default Dashboard;
