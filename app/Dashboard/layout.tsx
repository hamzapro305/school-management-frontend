import { FC, ReactNode } from "react";

const Layout: FC<{ left: ReactNode; right: ReactNode }> = ({ left, right }) => {
	return (
		<div>
			<div>{left}</div>
			<div>{right}</div>
		</div>
	);
};

export default Layout;
