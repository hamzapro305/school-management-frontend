"use client";

import { IStudent } from "@/Types/StudentType";
import Image from "next/image";
import { FC } from "react";

type Component = FC<{ Student: IStudent }>;

const StudentCard: Component = ({ Student }) => {
	return (
		<div className="StudentCard">
			<div className="StudentCard-wrapper">
				<Image
					src={Student?.photoURL}
					width={80}
					height={80}
					alt="STUDENT_PROFILE"
					style={{
						borderRadius: "100%",
					}}
				/>
				<div className="info MF">
					<div className="fullName">{Student?.fullName}</div>
					<div className="userName">{Student?.userName}</div>
					<div className="email">{Student?.email}</div>
					<div className="age">Age: {Student?.age}</div>
					<div className="age">Roles: {Student.roles.toString()}</div>
				</div>
				<div className="actions">
					<button>Open</button>
					<button>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default StudentCard;
