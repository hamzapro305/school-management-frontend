import StudentApi from "APIs/StudentApi";
import BackDrop from "Components/BackDrop";
import ImageInput from "Components/ImageInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalActions } from "Redux/Slices/ModalSlice";

const AddProfileImageModal = () => {
	const addProfileImage = useSelector((s) => s.Modal.addProfileImage);
	const [Student, setStudent] = useState(null);
	const [Uploading, setUploading] = useState({
		isLoading: false,
		progress: 0,
	});
	const [ProfileImage, setProfileImage] = useState(null);
	const dispatch = useDispatch();

	const Submit = async () => {
		if (ProfileImage) {
			setUploading((p) => ({ ...p, isLoading: true }));
			try {
                await 
			} catch (error) {
                console.log(error)
            }
			setUploading((p) => ({ ...p, isLoading: true }));
		}
	};

	useEffect(() => {
		const getStudent = async () => {
			setStudent(await StudentApi.getStudentById(addProfileImage));
		};
		getStudent();
	}, [addProfileImage, setStudent]);

	const CloseModal = () => {
		dispatch(ModalActions.setAddProfileImage(null));
	};
	return (
		<BackDrop>
			<div className="AddProfileImageModal">
				<div className="head MF">
					<div className="title">Add Profile Image</div>
					<button onClick={CloseModal}>X</button>
				</div>
				<div className="body">
					<div className="input">
						<ImageInput
							value={ProfileImage}
							setValue={(img) => setProfileImage(img)}
							label="Upload Profile Image"
						/>
					</div>
					<button>Upload</button>
				</div>
			</div>
		</BackDrop>
	);
};

export default AddProfileImageModal;
