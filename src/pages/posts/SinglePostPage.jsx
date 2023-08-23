// cia mes graziai atvaizuosim visa info esancia posto objekte
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './SinglePostPage.module.css';

export default function SinglePostPage() {
  // pasiimti dinamine adreso dali (parametra) tai yra post id
  // parsisiusti su axios konkretu posta
  // 3083126839342818 yra posto id
  // http://localhost:5000/posts/3083126839342818

  const params = useParams();
  console.log('params ===', params);
  const url = 'http://localhost:5000/posts/' + params.postId;
  const [post, setPost] = useState([]);
  console.log('url ===', url);
  const { id, image, title, body, author, tags, date } = post;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => setPost(resp.data))
      .catch(console.warn);
  }, []);

  return (
    <div className='container'>
      <h2 className={css.postTitleSection}>
        <span className={css.postAuthor}>{author}</span> -{' '}
        <span className={css.postTitle}>{title}</span>
      </h2>
      <p className={css.postText}>{body}</p>
      <div className={css.postOtherSection}>
        <div className={css.postImageBlock}>
          <img
            className={css.postImage}
            src={image}
            alt={`${author} - ${title}`}
          />
        </div>
        <div className={css.postOtherInfo}>
          <h3 className={css.postDate}>{date}</h3>
          <p className={css.postTags}>{tags}</p>
        </div>
      </div>
    </div>
  );
}
