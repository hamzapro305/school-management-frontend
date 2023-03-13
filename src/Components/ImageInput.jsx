import { DEFAULT_IMAGE } from "Assets/Globals";
import { useRef } from "react";

const ImageInput = ({ label, setValue, value }) => {
	const ref = useRef(null);
	const ImageVerifier = () => {
		let image;
		image = value ?? DEFAULT_IMAGE;
		if (typeof image === "string") {
			return image;
		} else {
			return URL.createObjectURL(image);
		}
	};
	const ImageHandler = ({ target }) => setValue(target.files[0]);
	return (
		<div className="ImageInput_Global MF">
			<label>{label}</label>
			<img
				src={ImageVerifier()}
				onClick={() => ref?.current?.click()}
				alt="INPUT_IMAGE"
			/>
			<input ref={ref} type="file" accept="image/*" onChange={ImageHandler} />
		</div>
	);
};

export default ImageInput;
