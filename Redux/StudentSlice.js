const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const Slice = createSlice({
	name: "Student",
	initialState: {
		students: [],
		totalPages: 0,
		pageNo: 0,
	},
	reducers: {
		setStudents: (state, { payload }) => {
			state.students = payload;
		},
		addStudent: (state, { payload }) => {
			state.students.push(payload);
		},
		setTotalPages: (state, { payload }) => {
			state.totalPages = payload;
		},
	},
});

export const StudentActions = Slice.actions;

export default Slice.reducer;
