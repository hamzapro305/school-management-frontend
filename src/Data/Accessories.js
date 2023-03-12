export const Routes = [
	{
		name: "All Students",
		path: "/allStudents",
	},
	{
		name: "Add Students",
		path: "/addStudent",
	},
];

export const StudentSchema = {
	roll_no: 0,
	previous_roll_no: 0,
	student_name: "",
	father_name: "",
	mother_name: "",
	surname: "",
	date_of_birth: "",
	place_of_birth: { streetAddress: "", city: "", state: "", country: "", postalCode: "", },
	gender: "",
	guardian_name: "",
	phone_no: "",
	mobile_no: "",
	address: { streetAddress: "", city: "", state: "", country: "", postalCode: "", },
	admission_date: "",
	admission_fees: 0,
	finger_image: null,
	status: "",
	entry_test_marks: 0,
	entry_test_remarks: 0,
	profile_image: null,
};

export const ServiceDomain = `http://localhost:3001`;

export const getImage = (URL) => {
	return ServiceDomain + URL;
};
