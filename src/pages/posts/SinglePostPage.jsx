// cia mes graziai atvaizuosim visa info esancia posto objekte
import axios from 'axios';
import Container from '../../components/UI/container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Btn from '../../components/UI/btn/Btn';

export default function SinglePostPage() {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState({});
  const url = 'http://localhost:5000/posts';
  const currentPostUrl = `${url}/${postId}`;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(currentPostUrl)
      .then(({ data }) => {
        setCurrentPost(data);
      })
      .catch(console.warn);
  }, []);
  // pasiimti dinamine adreso dali (parametra) tai yra post id
  // parsisiusti su axios konkretu posta
  // 3083126839342818 yra posto id
  // http://localhost:5000/posts/3083126839342818
  const { title, body, author, tags } = currentPost;

  function handlePostDelete() {
    console.log('handlePostDelete');
    axios
      .delete(currentPostUrl)
      .then((resp) => {
        console.log('deleted', resp);
        if (resp.status === 200) {
          console.log('pavyko istrint');
        }
      })
      .catch(console.warn);
    navigate('/posts', { replace: true });
  }

  return (
    <Container>
      <h1>{title}</h1>
      <p>{body}</p>
      <p className='author'>By: {author}</p>
      <h4>Tags:</h4>
      <ul className='unlisted flex gap-2'>
        {tags?.map((singleTag) => (
          <li key={singleTag}>{singleTag}</li>
        ))}
      </ul>
      <div>
        <Btn onClick={handlePostDelete}>delete</Btn>
      </div>
      {/* Comments HERE */}
    </Container>
  );
}
