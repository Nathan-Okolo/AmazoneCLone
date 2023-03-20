import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
