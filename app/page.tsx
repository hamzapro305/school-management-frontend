import { FC } from "react";

export const revalidate = 1000;

export const metadata = {
	title: "Home Page",
};

type Component = FC<{
	searchParams: { page: number | undefined };
}>;

const page: Component = () => {

	return (
		<div className="HomePage">
			Home
		</div>
	);
};

export default page;
