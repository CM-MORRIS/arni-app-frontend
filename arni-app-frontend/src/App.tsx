import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ContactUsPage from './pages/ContactUsPage';
import Layout from './components/Layout';
import BlogPostPage from './pages/BlogPostPage';
import BlogListPage from './pages/BlogListPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;