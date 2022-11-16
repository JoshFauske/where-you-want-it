import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import TopBar from "./components/TopBar";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Home from "./pages/Home";
// import NoMatch from "./pages/NoMatch";
// import Quote from "./pages/Quote";

function App() {

  return (
      <Router>
			{/* <TopBar /> */}
      {/* <Header /> */}
      <div className="container">
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* <Route path="/quote" element={<Quote />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
