import { FC, ReactNode } from "react";

const layout: FC<{ children: ReactNode }> = ({ children }) => {
	return <section>{children}</section>;
};

export default layout;
