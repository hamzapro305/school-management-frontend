import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "Redux/store";
import ModalsInit from "Components/ModalsInit";

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<Dashboard />
				<ModalsInit />
			</Provider>
		</Router>
	);
};

export default App;
