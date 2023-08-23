import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import PostsPage from './pages/posts/PostsPage';
import Header from './components/layout/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
      </Routes>
    </div>
  );
}
