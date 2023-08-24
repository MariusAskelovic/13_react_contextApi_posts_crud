import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/UI/container/Container';
// TODO: turetu buti config.js
// TODO: use .env file
const url = 'http://localhost:5000/posts';

export default function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    // parsisiusti
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        // irasyti i postsArr
        setPostsArr(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return (
    <Container>
      <h1>PostsPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        corporis, reiciendis eius ipsa laborum sed!
      </p>
      <ul>
        {postsArr.map((pObj) => (
          // vietoj li generuoti SinglePostLink
          <li key={pObj.id}>
            {/* vietoj "5" paduoti posto id */}
            <Link to={'/posts/5'}>{pObj.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
