import StudentAPI from "@/BackendAPI/StudentAPI";
import Pagination from "@/Components/Pagination";
import StudentCard from "@/Components/StudentCard";

export default async function Home({ searchParams }) {

	const { page } = searchParams;

	if(+page < 0) throw new Error("Page Param value cannot be less than zero")

	const { students, totalPages } = await StudentAPI.getStudents(page ?? 0, 2);

	return (
		<div className="HomePage">
			<div className="listStudents">
				<div className="listStudents-wrapper">
					{students?.map((Std) => (
						<StudentCard key={Std.id} Student={Std} />
					))}
				</div>
				<Pagination currentPage={+(page ?? 0)} totalPages={totalPages} />
			</div>
		</div>
	);
}
