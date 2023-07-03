"use client";

import { StudentsResponse } from "@/APIs/StudentAPI";
import { FC, useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import Pagination from "./Pagination";

type Comp = FC<{
    getStudents: (pageNo?: number) => Promise<StudentsResponse>;
    Page: number;
}>;
const StudentList: Comp = ({ getStudents, Page }) => {
    const [StudentResponse, setStudentResponse] = useState<
        StudentsResponse & { status: boolean }
    >({
        students: [],
        totalPages: 0,
        status: false,
    });
    const fetchData = async (pageNo?: number) => {
        setStudentResponse((p) => ({ ...p, status: true }));
        try {
            const newData = await getStudents(pageNo ?? 0);
            setStudentResponse((p) => ({ ...p, ...newData }));
        } catch (error) {
            console.log(error);
        }
        setStudentResponse((p) => ({ ...p, status: true }));
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="listStudents">
            <div className="listStudents-wrapper">
                {StudentResponse.students.map((Std) => (
                    <StudentCard key={Std.studentId} Student={Std} />
                ))}
            </div>
            <Pagination
                currentPage={+(Page ?? 0)}
                totalPages={StudentResponse.totalPages}
                getStudents={fetchData}
            />
        </div>
    );
};

export default StudentList;
