import { DemoStudentsResp } from "@/StudentJsonDemoData";
import { IStudent } from "@/Types/StudentType";
import { Deferred } from "./Deferred";

interface ResponseStandardType<T> {
    data: T;
}

export type StudentsResponse = {
    totalPages: number;
    students: IStudent[];
}

class API {
    private static api = new URL("http://localhost:8080/api/v1/student/");

    public static getStudents = async (
        PageNo: number,
        PageSize: number
    ): Promise<StudentsResponse> => {
        const prom = new Deferred<StudentsResponse>();
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const output = await resp.json()
			console.log(output);
            const data = {
                totalPages: DemoStudentsResp.data.totalPages,
                students: DemoStudentsResp.data.students.slice(0, 10),
            };
            // const api: URL = new URL(API.api.toString() + "getStudents");

            // api.searchParams.set("Page", PageNo.toString());
            // api.searchParams.set("Size", PageSize.toString());

            // console.log(api.toString())

            // const resp: Response = await fetch(api, {
            // 	method: "GET",
            // });

            // const Data: Promise<ResponseStandardType<getStudentsResponse>> =
            // 	resp.json();
            // const DataInJson: getStudentsResponse = (await Data).data;

            prom.resolve(data);
        } catch (error) {
            console.log(error);
            prom.reject(null);
        }
        return prom.promise;
    };
}

const StudentAPI = API;

export default StudentAPI;
