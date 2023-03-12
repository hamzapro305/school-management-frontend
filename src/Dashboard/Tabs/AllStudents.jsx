import StudentApi from "APIs/StudentApi";
import { getImage } from "Data/Accessories";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ModalActions } from "Redux/Slices/ModalSlice";

const AllStudents = () => {
	const [Students, setStudents] = useState([]);

	const dispatch = useDispatch();

	const AddImage = (id) => {
		dispatch(ModalActions.setAddProfileImage(id));
	};

	useEffect(() => {
		const StudentsInit = async () => {
			setStudents(await StudentApi.getStudents());
		};
		StudentsInit();
	}, []);
	return (
		<div className="AllStudents">
			<div className="AllStudents-wrapper">
				{Students.map((Std) => (
					<div key={Std.id} className="Student">
						<div className="image">
							<img src={getImage(Std.profile_image)} alt="" />
						</div>
						<div title={Std.id} className="id">
							{Std.id.slice(0, 10)}...
						</div>
						<div className="name">{Std.student_name}</div>
						<div className="fatherName"></div>
						<div className="motherName"></div>
						<button onClick={() => AddImage(Std.id)}>change image</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllStudents;
