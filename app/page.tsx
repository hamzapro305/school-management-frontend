import StudentAPI from "@/APIs/StudentAPI";
import Pagination from "@/Components/Pagination";
import StudentCard from "@/Components/StudentCard";
import { FC } from "react";

export const revalidate = 1000;

export const metadata = {
	title: "Home Page",
};

type Component = FC<{
	searchParams: { page: number | undefined };
}>;

const page = async () => {

	return (
		<div className="HomePage">
		</div>
	);
};

export default page;
