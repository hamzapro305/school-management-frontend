"use client";

import { FC } from "react";

type Component = FC<{
    currentPage: number;
    totalPages: number;
    getStudents: (pageNo?: number) => Promise<void>;
}>;

const Pagination: Component = ({ currentPage, totalPages, getStudents }) => {
    const getPages = (number: number): number[] => {
        const CurrentPageNo = +number;
        if (CurrentPageNo < 0) return [];
        else if (
            CurrentPageNo === 0 ||
            CurrentPageNo === 1 ||
            CurrentPageNo === 2
        )
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
                        <button
                            className="move_action"
                            onClick={(e) => getStudents(currentPage - 1)}
                        >{`<`}</button>
                    )}
                    <div className="numbers">
                        {getPages(currentPage)?.map((x) => {
                            return (
                                <button
                                    key={x}
                                    className={`item ${
                                        currentPage === x ? "active" : ""
                                    }`}
                                    onClick={(e) => getStudents(currentPage)}
                                >
                                    {x}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        className="move_action"
                        onClick={(e) => getStudents(currentPage + 1)}
                    >{`>`}</button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
