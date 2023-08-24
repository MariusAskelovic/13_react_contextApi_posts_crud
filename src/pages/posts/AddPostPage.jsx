// prideti psl i header
// i app.jsx
// i sita puslapi ikelti forma

import Container from '../../components/UI/container/Container';
import NewPostForm from '../../components/form/NewPostForm';

// rodyti tik kai logged in

export default function AddPostPage() {
  return (
    <Container>
      <h2>Create New Post</h2>
      <NewPostForm />
    </Container>
  );
}
