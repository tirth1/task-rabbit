import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookTasker from './pages/BookTasker';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/book" element={<BookTasker />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
