import { DEFAULT_IMAGE } from "Assets/Globals";

const Avatar = ({
	referrerPolicy,
	Url,
	width,
	height,
	cursor,
	circle,
	onClick,
	objectFit,
	borderRadius,
	Title,
}) => {
	return (
		<img
			src={Url ?? DEFAULT_IMAGE}
			className="GlobalAvatar"
			title={Title ?? ""}
			onClick={onClick ?? (() => {})}
			alt=""
			referrerPolicy={referrerPolicy ?? "no-referrer"}
			width={width ?? 65}
			height={height ?? 65}
			style={{
				borderRadius: circle ? "50%" : borderRadius ?? 0,
				objectFit: objectFit ?? "cover",
				cursor: cursor ?? "unset",
				backgroundColor: "gray",
			}}
		/>
	);
};

export default Avatar;
