import { ServiceDomain } from "Data/Accessories";

class API {
	addStudent(Student) {
		const API_URL = `${ServiceDomain}/api/v1/student/addStudent`;
		return new Promise(async (res, rej) => {
			try {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify(Student),
					redirect: "follow",
				};
				const added_student_res = await fetch(API_URL, requestOptions);
				const added_student = await added_student_res.json();
				res(added_student);
			} catch (error) {
				console.log(error);
				rej(null);
			}
		});
	}
	addStudentProfileImage(StudentId, Image, setLoading) {
		return new Promise(async (res, rej) => {
			const API_URL = `${ServiceDomain}/api/v1/student/UploadProfileImage/${StudentId}`;
			try {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "multipart/form-data");

				var formData = new FormData();
				formData.append("file", Image);

				const downloadUrl = await fetch(API_URL, {
					method: "POST",
					headers: myHeaders,
					body: formData,
					redirect: "follow",
					onUploadProgress: setLoading ?? (() => {}),
				});
				await this.updateStudent(StudentId, { profile_image: downloadUrl });
				res(true);
			} catch (error) {
				console.log(error);
				rej(null);
			}
		});
	}
	updateStudent(StudentId, StudentData) {
		return new Promise(async (res, rej) => {
			const API_URL = `${ServiceDomain}/api/v1/student/updateStudent/${StudentId}`;
			try {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				const updated_student_res = await fetch(API_URL, {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify(StudentData),
					redirect: "follow",
				});
				const updated_student = await updated_student_res.json();
				res(updated_student);
			} catch (error) {
				console.log(error);
				rej(null);
			}
		});
	}
	getStudentById(id) {
		return new Promise(async (res, rej) => {
			try {
				const API_URL = `${ServiceDomain}/api/v1/student/getStudent?id=${id}`;
				const Student = await fetch(API_URL);
				res(await Student.json());
			} catch (error) {
				rej(null);
			}
		});
	}
	getStudents() {
		return new Promise(async (res, rej) => {
			const API_URL = `${ServiceDomain}/api/v1/student/getStudents`;
			try {
				const Students = await fetch(API_URL);
				res(await Students.json());
			} catch (error) {
				rej([]);
			}
		});
	}
}

export default new API();
