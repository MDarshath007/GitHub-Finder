import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Searchresult from "./pages/Searchresult"
import Userdetails from "./pages/Userdetails";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search/:username" element={<Searchresult />} />
          <Route path="/user/:username/" element={<Userdetails />} />
        </Routes>
    </>
  );
}
export default App;
