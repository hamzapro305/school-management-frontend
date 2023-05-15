import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./StudentSlice";

export const store = configureStore({
	reducer: {
		Student: StudentSlice,
	},
	preloadedState: {},
});
