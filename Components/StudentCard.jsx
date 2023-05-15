"use client";

import Image from "next/image";

const StudentCard = ({ Student }) => {
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
