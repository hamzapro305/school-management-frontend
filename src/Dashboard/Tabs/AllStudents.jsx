import Avatar from "Components/Avatar";
import FadePage from "Components/FadePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalActions } from "Redux/Slices/ModalSlice";
import { FetchStudentsByCount } from "Redux/Slices/StudentSlice";

const AllStudents = () => {
	const Students = useSelector((_) => _.Student.AllStudents);

	const dispatch = useDispatch();

	const AddImage = (id) => {
		dispatch(ModalActions.setAddProfileImage(id));
	};

	useEffect(() => {
		dispatch(FetchStudentsByCount(4));
	}, [dispatch]);
	return (
		<FadePage cssClass="AllStudents">
			<div className="AllStudents-wrapper">
				{Students.map((Std) => (
					<div key={Std.id} className="Student">
						<div className="image">
							<Avatar Url={Std.profile_image} circle width={50} height={50} />
						</div>
						<div title={Std.id} className="field id">
							{Std.id.slice(0, 10)}...
						</div>
						<div className="field name">{Std.student_name}</div>
						<div className="field fatherName"></div>
						<div className="field motherName"></div>
						<button onClick={() => AddImage(Std.id)}>change image</button>
					</div>
				))}
			</div>
		</FadePage>
	);
};

export default AllStudents;
