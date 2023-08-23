import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSuccess() {
    // console.log('login aaaaaa');
    navigate('/posts');
  }

  return (
    <div className='container'>
      <h2>Login Here</h2>
      <LoginForm onSekme={handleSuccess} />
    </div>
  );
}
