import { FC } from "react";


export const metadata = {
	title: "Home Page",
};

type Component = FC<{
	searchParams: { page: number };
}>;

/* @ts-expect-error Server Component */
const page: Component = async ({ searchParams }) => {

	return (
		<div className="HomePage">
			Home
		</div>
	);
};

export default page;
