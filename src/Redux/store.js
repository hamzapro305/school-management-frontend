import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./Slices/ModalSlice";

export default configureStore({
	reducer: {
		Modal: ModalSlice,
	},
});
