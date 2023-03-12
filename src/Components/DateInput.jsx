const DateInput = ({ label, setValue }) => {
	const DateHandler = ({ target }) => {
		setValue && setValue(target.value);
	};
	return (
		<div className="DateInput_Global">
			<div className="DateInput_Global-wrapper MF">
				<label>{label}</label>
				<input type="date" onChange={DateHandler} />
			</div>
		</div>
	);
};

export default DateInput;
