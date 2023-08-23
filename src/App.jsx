import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import PostsPage from './pages/posts/PostsPage';
import Header from './components/layout/Header';
import { useAuth } from './store/AuthProvider';
import LoginPage from './pages/auth/LoginPage';

export default function App() {
  const ctx = useAuth();
  console.log('ctx ===', ctx);
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}
