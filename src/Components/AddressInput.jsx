import React, { useEffect, useState } from "react";

const AddressInput = ({ label, setValue }) => {
	const [Data, setData] = useState({
		streetAddress: "",
		city: "",
		state: "",
		postalCode: "",
	});
	const DataHandler = ({ target }) => {
		setData((p) => {
			const newData = { ...p, [target.name]: target.value };
			return newData;
		});
	};
	useEffect(() => {
		setValue(Data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Data]);

	return (
		<div className="AddressInput_Global MF">
			<label>{label}</label>
			<div className="AddressInput_Global-wrapper">
				<div className="input">
					<label>Street Address</label>
					<input
						type="text"
						value={Data.streetAddress}
						name="streetAddress"
						onChange={DataHandler}
					/>
				</div>
				<div className="input">
					<label>City</label>
					<input
						type="text"
						value={Data.city}
						name="city"
						onChange={DataHandler}
					/>
				</div>
				<div className="input">
					<label>State</label>
					<input
						type="text"
						value={Data.state}
						name="state"
						onChange={DataHandler}
					/>
				</div>
				<div className="input">
					<label>Postal Code</label>
					<input
						type="text"
						value={Data.postalCode}
						name="postalCode"
						onChange={DataHandler}
					/>
				</div>
			</div>
		</div>
	);
};

export default AddressInput;
