class API {
	static #URL = "http://localhost:8080/api/v1/student/";

	static getStudents = (PageNo, PageSize) => {
		return new Promise(async (res, rej) => {
			try {
				const resp = await fetch(
					API.#URL + `getStudents?Page=${PageNo}&Size=${PageSize}`,
					{
						method: "GET",
					}
				);
				const data = await resp.json();
				res(data?.data);
			} catch (error) {
				console.log(error);
				rej(null);
			}
		});
	};
}

const StudentAPI = API;

export default StudentAPI;
