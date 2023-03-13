import FadePage from "Components/FadePage";
import SimpleAnalyticsBox from "Components/SimpleAnalyticsBox";
import { IoNotificationsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const HomeTab = () => {
	return (
		<FadePage cssClass="HomeTab">
			<div className="HomeTab-header">
				<div className="logo MF">School Management</div>
				<div className="end">
					<div className="notification icon">
						<IoNotificationsOutline />
					</div>
				</div>
			</div>
			<motion.div layout className="parts">
				<SimpleAnalyticsBox label="Students" value={3256} />
				<SimpleAnalyticsBox label="Students" value={3256} />
				<SimpleAnalyticsBox label="Students" value={3256} />
				<SimpleAnalyticsBox label="Students" value={3256} />
			</motion.div>
		</FadePage>
	);
};

export default HomeTab;
