import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import AddStudentTab from "./Tabs/AddStudent";
import AllStudents from "./Tabs/AllStudents";

const Panel = () => {
	const location = useLocation();
	return (
		<div className="Dashboard-Panel">
			<AnimatePresence mode="wait">

				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<></>} />
					<Route path="/addStudent" element={<AddStudentTab />} />
					<Route path="/allStudents" element={<AllStudents />} />
				</Routes>

			</AnimatePresence>
		</div>
	);
};

export default Panel;
