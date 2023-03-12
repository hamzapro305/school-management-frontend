import { Route, Routes } from "react-router-dom";
import AddStudentTab from "./Tabs/AddStudent";
import AllStudents from "./Tabs/AllStudents";

const Panel = () => {
	return (
		<div className="Dashboard-Panel">
			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/addStudent" element={<AddStudentTab />} />
				<Route path="/allStudents" element={<AllStudents />} />
			</Routes>
		</div>
	);
};

export default Panel;
