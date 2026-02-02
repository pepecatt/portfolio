import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutView from "./views/About";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
