import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PostsPage from './pages/posts/PostsPage';
import Header from './components/layout/Header';
import { useAuth } from './store/AuthProvider';
import LoginPage from './pages/auth/LoginPage';
import NotFound from './pages/NotFound';
import SinglePostPage from './pages/posts/SinglePostPage';
import AddPostPage from './pages/posts/AddPostPage';

export default function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {isLoggedIn && <Route path='/posts' element={<PostsPage />} />}
        {isLoggedIn && (
          <Route path='/posts/:postId' element={<SinglePostPage />} />
        )}
        {isLoggedIn && <Route path='/add-post' element={<AddPostPage />} />}
        {!isLoggedIn && <Route path='/login' element={<LoginPage />} />}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
