import Devices from "./ubidots/Devices";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <h1>Práctica 7</h1>
      <Routes>
        <Route path="/" element={<Devices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
