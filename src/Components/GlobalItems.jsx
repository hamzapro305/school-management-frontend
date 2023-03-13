const GlobalMainButton = ({ content, cssClass, isLoading, onClick }) => {
	return (
		<button onClick={() => onClick && onClick()} className="GlobalMainButton">
			{isLoading ? "Loading..." : content}
		</button>
	);
};

export { GlobalMainButton };
