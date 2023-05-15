import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header>
			<div className="header-wrapper">
				<div className="logo MF">School Management</div>
				<nav className="MF">
					<Link href="/about">About</Link>
					<Link href="/">Home</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
