import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;