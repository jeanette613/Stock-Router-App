import "./style.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main"
import About from "./pages/about";
import Stock from "./pages/stock";
import Dashboard from "./pages/dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/stocks/:symbol" element={<Stock />} />
                <Route path="/stocks" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App;