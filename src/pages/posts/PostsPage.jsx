import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SinglePostLink from '../../components/posts/SinglePostLink';
import css from './PostsPage.module.css';
// TODO: turetu buti config.js
// TODO: use .env file
const url = 'http://localhost:5000/posts';

export default function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [filterVal, setFilterVal] = useState('');

  useEffect(() => {
    // parsisiusti
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        // irasyti i postsArr
        setPostsArr(resp.data);
        setFilteredArr(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  function filterArr(event) {
    const filterVal = event.target.value;
    setFilterVal(filterVal);
    console.log('filterVal ===', filterVal);
    if (filterVal.length > 0) {
      const newArr = postsArr.filter((obj) =>
        obj.title.toLowerCase().includes(filterVal.toLowerCase())
      );
      setFilteredArr(newArr);
    } else {
      setFilteredArr(postsArr);
    }
  }

  return (
    <div className='container'>
      <h1>PostsPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        corporis, reiciendis eius ipsa laborum sed!
      </p>
      <input
        type='text'
        placeholder='filter'
        className={css.filterInput}
        onChange={filterArr}
        value={filterVal}
      />
      <ul>
        {filteredArr.map((pObj) => (
          <li key={pObj.id}>
            <Link to={'/posts/' + pObj.id}>
              <SinglePostLink title={pObj.title} author={pObj.author} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
