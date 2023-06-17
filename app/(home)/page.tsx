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
            <div className="HomePage-wrapper">
                <div className="banner"></div>
                <div className="boxes">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <div className="boxes">
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </div>
    );
};

export default page;
