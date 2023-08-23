import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h2>Login Here</h2>
      <LoginForm />
    </div>
  );
}
