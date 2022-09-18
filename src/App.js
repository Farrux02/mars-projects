import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LoginPage from "./Pages/Login";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App container px-20">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/projects" element={<Main/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
