// import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BrowserRouter> */}
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/browse" element={<Browse />} />
                </Routes>
              {/* </BrowserRouter> */}
      </header>
    </div>
  );
}

export default App;
