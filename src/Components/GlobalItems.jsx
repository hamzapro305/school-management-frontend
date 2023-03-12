const GlobalMainButton = ({ content, cssClass, isLoading }) => {
	return (
		<button className="GlobalMainButton">
			{isLoading ? "Loading..." : content}
		</button>
	);
};

export { GlobalMainButton };
