const CircularProgressBar = ({ Progress }) => {
	const GetProgressRadius = (radius, progress) => {
		let C = 2 * Math.PI * radius;
		return C - (C * progress) / 100;
	};
	return (
		<div className="CircularProgressBar">
			<div className="percent">
				<svg>
					<circle className="circle1" cx="70" cy="70" r="50"></circle>
					<circle
						strokeDashoffset={`${GetProgressRadius(50, Progress)}px`}
						strokeDasharray={`${50 * Math.PI * 2}px`}
						className="circle2"
						cx="70"
						cy="70"
						r="50"
					></circle>
				</svg>
				<div className="number MF">
					<h2>
						{Progress}
						<span>%</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default CircularProgressBar;
