import './App.css';
import { Homepage } from './components/Homepage';
import { Routes, Route} from "react-router-dom";
import {Puzzle} from "./pages/puzzle";

export default function App() {
  return (
    <div className="App">
      <Homepage />
      <Routes>
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
    </div>

  );
}