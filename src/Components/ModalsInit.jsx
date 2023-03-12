import React from "react";
import { useSelector } from "react-redux";
import AddProfileImageModal from "./Modals/AddProfileImageModal";

const ModalsInit = () => {
	const { addProfileImage } = useSelector((s) => s.Modal);
	return (
		<div className="ModalsInit">
			{addProfileImage && <AddProfileImageModal />}
		</div>
	);
};

export default ModalsInit;
