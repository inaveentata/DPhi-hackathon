import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Error from './pages/Error'
import CreateChallenge from './pages/CreateChallenge'
import ChallengesDetail from './pages/ChallegesDetail'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-challenge' element={<CreateChallenge />} />
          <Route path='/challenge/:id' element={<ChallengesDetail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
