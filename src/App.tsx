import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

function App() {
	return (
		<Router>
			<TopBar />
			{/* <Header /> */}
			<div className="px-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</div>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
