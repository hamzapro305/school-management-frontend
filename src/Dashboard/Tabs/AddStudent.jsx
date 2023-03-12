import StudentApi from "APIs/StudentApi";
import AddressInput from "Components/AddressInput";
import DateInput from "Components/DateInput";
import ImageInput from "Components/ImageInput";
import { StudentSchema } from "Data/Accessories";
import { useState } from "react";

const AddStudent = () => {
	const [Data, setData] = useState(StudentSchema);
	const [Loading, setLoading] = useState(false)
	const DataHandler = ({ target }) => {
		setData((p) => ({ ...p, [target.name]: target.value }));
	};
	const DataKeyHandler = (key, data) => {
		setData((p) => ({ ...p, [key]: data }));
	};
	const Submit = async () => {
		await StudentApi.addStudent({
			...Data,
			profile_image: null,
		});
	};
	return (
		<div className="AddStudent">
			<div className="form-wrapper">
				<div className="l-col">
					<div className="student-form">
						<div className="input">
							<label>Roll no</label>
							<input type="number" name="roll_no" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Previous Roll no</label>
							<input
								type="number"
								name="previous_roll_no"
								onChange={DataHandler}
							/>
						</div>
						<div className="input">
							<label>Student Name</label>
							<input type="text" name="student_name" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Father Name</label>
							<input type="text" name="father_name" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Mother Name</label>
							<input type="text" name="mother_name" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Surname</label>
							<input type="text" name="surname" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Gender</label>
							<input type="text" name="gender" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Guardian name </label>
							<input type="text" name="guardian_name" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Phone no</label>
							<input type="number" name="phone_no" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Mobile no</label>
							<input type="number" name="mobile_no" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Status</label>
							<input type="text" name="status" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Admission fees</label>
							<input type="number" name="admission_fees" onChange={DataHandler} />
						</div>
						<div className="input">
							<label>Entry test marks</label>
							<input
								type="number"
								name="entry_test_marks"
								onChange={DataHandler}
							/>
						</div>
						<div className="input">
							<label>Entry test remarks</label>
							<input
								type="number"
								name="entry_test_remarks"
								onChange={DataHandler}
							/>
						</div>
					</div>
					<DateInput
						label="Date Of Birth"
						setValue={(date) => DataKeyHandler("date_of_birth", date)}
					/>
					<AddressInput
						label="Place of birth"
						setValue={(data) => DataKeyHandler("place_of_birth", data)}
					/>
				</div>
				<div className="r-col">
					<AddressInput
						label="Address"
						setValue={(data) => DataKeyHandler("address", data)}
					/>
					<DateInput
						label="Admission Date"
						setValue={(date) => DataKeyHandler("admission_date", date)}
					/>
					<ImageInput
						value={Data.profile_image}
						setValue={(image) => DataKeyHandler("profile_image", image)}
						label="Profile image"
					/>
					<ImageInput
						value={Data.finger_image}
						setValue={(image) => DataKeyHandler("finger_image", image)}
						label="Finger image (optional)"
					/>
				</div>
			</div>

			<button onClick={Submit}>Submit</button>
		</div>
	);
};

export default AddStudent;
