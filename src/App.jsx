import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import PostsPage from './pages/posts/PostsPage';
import Header from './components/layout/Header';
import { useAuth } from './store/AuthProvider';
import LoginPage from './pages/auth/LoginPage';
import NotFound from './pages/NotFound';

export default function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {isLoggedIn && <Route path='/posts' element={<PostsPage />} />}
        {!isLoggedIn && <Route path='/login' element={<LoginPage />} />}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
