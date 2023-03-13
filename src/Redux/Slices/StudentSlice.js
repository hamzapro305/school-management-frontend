import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StudentApi from "APIs/StudentApi";

export const FetchStudentsByCount = createAsyncThunk(
	"Student/FetchStudentsByCount",
	async (count, thunkAPI) => {
		try {
			const Students = await StudentApi.getStudents();
			return thunkAPI.fulfillWithValue(Students);
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue([]);
		}
	}
);

const Slice = createSlice({
	name: "Student",
	initialState: {
		Student: null,
		AllStudents: [],
	},
	reducers: {
		setStudent: (state, { payload }) => {
			state.Student = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(FetchStudentsByCount.fulfilled, (state, { payload }) => {
			state.AllStudents = payload;
		});
	},
});

export const StudentActions = Slice.actions;

export default Slice.reducer;
