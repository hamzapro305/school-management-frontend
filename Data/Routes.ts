import { IconType } from "react-icons";
import { FaChild } from "react-icons/fa";
import { AiOutlineUserAdd, AiOutlineHome } from "react-icons/ai";

type Route = {
    name: string;
    path: string;
    icon: IconType;
    role: ("ROLE_STUDENT" | "ROLE_ADMIN" | "ROLE_TEACHER")[];
};

const Routes: Array<Route> = [
    {
        name: "Home",
        path: "/",
        icon: AiOutlineHome,
        role: ["ROLE_ADMIN", "ROLE_STUDENT", "ROLE_TEACHER"],
    },
    {
        name: "All Students",
        path: "/AllStudents",
        icon: FaChild,
        role: ["ROLE_ADMIN", "ROLE_TEACHER"],
    },
    {
        name: "Add Student",
        path: "/AddStudent",
        icon: AiOutlineUserAdd,
        role: ["ROLE_TEACHER"],
    },
];

export default Routes;
