import { FC } from "react";

/* @ts-expect-error Server Component */
const page: FC = async () => {
	return <div>dashboard</div>;
};

export default page;
