import Login from "./components/Login";
import Register from "./components/Register";
import StudHome from "./components/StudentHome";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path="/login"
						element={<Login />}
					/>
					<Route
						exact
						path="/register"
						element={<Register />}
					/>
					<Route
						exact
						path="/"
						element={<StudHome />}
					/>
				</Routes>
			</Router>

			<ToastContainer />
		</div>
	);
}

export default App;
