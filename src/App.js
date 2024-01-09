import './App.css';
import { Homepage } from './components/Homepage';
import { Routes, Route} from "react-router-dom";
import { DragDrop } from './components/DragDrop';

export default function App() {
  return (
    <div className="App">
      <Homepage />
      <DragDrop />
      <Routes>
        <Route path="/puzzle" />
      </Routes>
    </div>

  );
}