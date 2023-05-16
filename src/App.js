import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import Profile from './components/Profile';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
