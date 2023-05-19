import { IStudent } from "@/Types/StudentType";

interface ResponseStandardType<T> {
	data: T;
}

interface getStudentsResponse {
	totalPages: number;
	students: IStudent[];
}

class API {
	private static api = new URL("http://localhost:8080/api/v1/student/");

	public static getStudents = (
		PageNo: number,
		PageSize: number
	): Promise<getStudentsResponse> => {
		return new Promise(async (res, rej) => {
			try {
				const api: URL = new URL(API.api.toString() + "getStudents");

				api.searchParams.set("Page", PageNo.toString());
				api.searchParams.set("Size", PageSize.toString());

				const resp: Response = await fetch(api, {
					method: "GET",
					next: {
						revalidate: 20,
					},
				});
				const Data: Promise<ResponseStandardType<getStudentsResponse>> =
					resp.json();
				const DataInJson: getStudentsResponse = (await Data).data;

				res(DataInJson);
			} catch (error) {
				console.log(error);
				rej(null);
			}
		});
	};
}

const StudentAPI = API;

export default StudentAPI;
