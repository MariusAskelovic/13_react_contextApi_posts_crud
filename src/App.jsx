import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PostsPage from './pages/posts/PostsPage';
import Header from './components/layout/Header';
import { useAuth } from './store/AuthProvider';
import LoginPage from './pages/auth/LoginPage';
import NotFound from './pages/NotFound';
import SinglePostPage from './pages/posts/SinglePostPage';

export default function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
        {/* vietoj penketo turi buti dinaminis posto id parametras */}
        <Route path='/posts/5' element={<SinglePostPage />} />
        {!isLoggedIn && <Route path='/login' element={<LoginPage />} />}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
