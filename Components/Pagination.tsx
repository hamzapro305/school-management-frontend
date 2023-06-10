"use client";

import Link from "next/link";
import { FC } from "react";

type Component = FC<{
	currentPage: number;
	totalPages: number;
}>;

const Pagination: Component = ({ currentPage, totalPages }) => {
	const getLink = (currentPage: number) => {
		return `/AllStudents?page=${currentPage}`;
	};

	const getPages = (number: number): number[] => {
		const CurrentPageNo = +number;
		if (CurrentPageNo < 0) return [];
		else if (CurrentPageNo === 0 || CurrentPageNo === 1 || CurrentPageNo === 2)
			return [0, 1, 2, 3, 4];
		else {
			return [
				CurrentPageNo - 2,
				CurrentPageNo - 1,
				CurrentPageNo,
				CurrentPageNo + 1,
				CurrentPageNo + 2,
			];
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
