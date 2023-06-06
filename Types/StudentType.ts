interface IStudent {
	studentId: string;
	photoURL: string;
	email: string;
	age: number;
	userName: string;
	fullName: string;
	gender: string;
	roles: ("ROLE_ADMIN" | "ROLE_STUDENT" | "ROLE_TEACHER")[];
}

export type { IStudent };
