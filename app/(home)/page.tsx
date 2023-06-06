import StudentAPI from "@/APIs/StudentAPI";
import Pagination from "@/Components/Pagination";
import StudentCard from "@/Components/StudentCard";
import * as _ from "lodash"
import { FC } from "react";


export const metadata = {
	title: "Home Page",
};

type Component = FC<{
	searchParams: { page: number };
}>;

/* @ts-expect-error Server Component */
const page: Component = async ({ searchParams }) => {
	const { page: Page } = searchParams;

	const StudentData = await StudentAPI.getStudents(
		Page ?? 0,
		(process.env.SizeToLoadStudents ?? 10) as number
	);

	const { students, totalPages } = StudentData;

	return (
		<div className="HomePage">
			<div className="listStudents">
				<div className="listStudents-wrapper">
					{students?.map((Std) => (
						<StudentCard key={Std.studentId} Student={Std} />
					))}
				</div>
				<Pagination currentPage={+(Page ?? 0)} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default page;
