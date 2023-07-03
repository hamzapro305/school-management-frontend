import StudentAPI from "@/APIs/StudentAPI";
import StudentList from "@/Components/StudentList";
import { FC } from "react";

export const metadata = {
    title: "All Students",
};

type Component = FC<{
    searchParams: { page: number };
}>;

/* @ts-expect-error Server Component */
const page: Component = async ({ searchParams }) => {
    const { page: Page } = searchParams;

    const getStudentData = async (pageNo?: number) => {
        "use server";

        const StudentData = await StudentAPI.getStudents(
            pageNo ?? 0,
            (process.env.SizeToLoadStudents ?? 10) as number
        );

        return StudentData;
    };

    return (
        <div className="AllStudents">
            <StudentList getStudents={getStudentData} Page={Page}/>
        </div>
    );
};

export default page;
