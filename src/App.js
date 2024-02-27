import './App.css';
import { Homepage } from './pages/homepage';
import { Routes, Route} from "react-router-dom";
import { Puzzle } from "./pages/puzzle";
import { Blog } from "./pages/blog";
import { Navbar } from "./components/Navbar";
import { FillBlank } from './pages/fillblank';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fillblank" element={<FillBlank />} />
      </Routes>
    </div>

  );
}