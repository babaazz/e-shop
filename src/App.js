import "./App.css";
import Home from "./routes/home/home.route";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/navbar-route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
