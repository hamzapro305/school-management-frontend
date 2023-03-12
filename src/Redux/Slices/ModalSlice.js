const { createSlice } = require("@reduxjs/toolkit");

const Slice = createSlice({
	name: "Modal",
	initialState: {
		addProfileImage: null,
	},
	reducers: {
		setAddProfileImage: (state, { payload }) => {
			state.addProfileImage = payload;
		},
	},
});

export const ModalActions = Slice.actions;

export default Slice.reducer;
