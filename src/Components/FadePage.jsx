import { motion } from "framer-motion";

const FadePage = ({ children, cssClass }) => {
	const Animation = {
		variants: {
			hidden: {
				opacity: 0,
				transition: {
					duration: 0.5,
				},
			},
			show: {
				opacity: 1,
				transition: {
					duration: 0.5,
				},
			},
		},
		initial: "hidden",
		animate: "show",
		exit: "hidden",
		className: cssClass ?? "__page__fade__animation__",
	};
	return <motion.div {...Animation}>{children}</motion.div>;
};

export default FadePage;
