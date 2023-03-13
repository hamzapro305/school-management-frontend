import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./Slices/ModalSlice";
import StudentSlice from "./Slices/StudentSlice";

export default configureStore({
	reducer: {
		Modal: ModalSlice,
		Student: StudentSlice,
	},
});
