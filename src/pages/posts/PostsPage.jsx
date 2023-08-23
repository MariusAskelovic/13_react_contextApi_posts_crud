import { useEffect, useState } from 'react';
import axios from 'axios';

// TODO: turetu buti config.js
// TODO: use .env file
const url = 'http://localhost:5000/posts';

export default function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setPostsArr(resp.data);
      })
      .catch(console.warn);
  }, []);

  return (
    <div className='container'>
      <h2>PostsPage</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio
        eveniet illum porro minima est vel corrupti! Nihil, sapiente odit.
      </p>
      <ul>
        {postsArr.map((pObj) => (
          <li key={pObj.id}>{pObj.title}</li>
        ))}
      </ul>
    </div>
  );
}
