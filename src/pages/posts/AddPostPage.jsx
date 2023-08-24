// prideti psl i header
// i app.jsx
// i sita puslapi ikelti forma

import NewPostForm from '../../components/form/NewPostForm';

// rodyti tik kai logged in
export default function AddPostPage() {
  return (
    <div>
      <NewPostForm onSuccess={() => {}} />
    </div>
  );
}
