import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
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
			<div className="container mx-auto">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
