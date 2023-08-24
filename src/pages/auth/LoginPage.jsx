import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';
import Container from '../../components/UI/container/Container';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSuccess() {
    // console.log('login aaaaaa');
    navigate('/posts');
  }

  return (
    <Container>
      <h2>Login Here</h2>
      <LoginForm onSekme={handleSuccess} />
    </Container>
  );
}
