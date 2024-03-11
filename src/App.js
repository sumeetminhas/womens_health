import './App.css';
import { Homepage } from './pages/homepage';
import { Routes, Route} from "react-router-dom";
import { Puzzle } from "./pages/puzzle";
import { Blog } from "./pages/blog";
import { Navbar } from "./components/Navbar";
import { FillBlank } from './pages/fillblank';
import { ExternalSystem } from './components/ExternalSystem';
import { InternalSystem } from './components/InternalSystem';
import { LearnPage } from './pages/learn';
import { GamesPage } from './pages/games';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fillblank" element={<FillBlank />} />
        <Route path="/external" element={<ExternalSystem />} />
        <Route path="/internal" element={<InternalSystem />} />
        <Route path="/games" element={<GamesPage />} />




      </Routes>
    </div>

  );
}