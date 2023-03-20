// import "./pages.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function pages() {
  return (
    <Router className="pages">
      <Routes>
        <Route exact path="/" element={<Header />  } />
        {/* <Route exact path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default pages;
