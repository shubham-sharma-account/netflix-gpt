// import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Browse from "./components/Browse";
import { Provider } from "react-redux";
import { appStore } from "./utils/store/appStore";
import Body from "./components/Body";
import Browse from "./components/Browse";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </header>
      </Provider>
    </div>
  );
}

export default App;
