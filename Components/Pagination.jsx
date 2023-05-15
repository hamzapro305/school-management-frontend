"use client";

import Link from "next/link";

const Pagination = ({ currentPage, totalPages }) => {
	const getLink = (PageNo) => `/?page=${PageNo}`;

	const getPages = (n) => {
		if (n < 0) return [];
		else if (n === 0 || n === 1 || n === 2) return [0, 1, 2, 3, 4];
		else {
			return [n - 2, n - 1, n, n + 1, n + 2];
		}
	};

	return (
		<div className="Pagination">
			<div className="Pagination-wrapper">
				<div className="options MF">
					{currentPage !== 0 && (
						<Link
							className="move_action"
							href={getLink(currentPage - 1)}
						>{`<`}</Link>
					)}
					<div className="numbers">
						{getPages(currentPage)?.map((x) => {
							return (
								<Link
									key={x}
									href={getLink(x)}
									className={`item ${currentPage === x ? "active" : ""}`}
								>
									{x}
								</Link>
							);
						})}
					</div>
					<Link
						className="move_action"
						href={getLink(currentPage + 1)}
					>{`>`}</Link>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
