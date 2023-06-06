"use client"

import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
	return (
		<header>
			<div className="header-wrapper">
				<div className="logo MF">School Management</div>
				<nav className="MF">
					<Link href="/About">About</Link>
					<Link href="/">Home</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
