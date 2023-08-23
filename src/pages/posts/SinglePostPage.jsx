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
  const [post, setPost] = useState({
    tags: [],
  });
  console.log('url ===', url);
  const { id, image, title, body, author, tags, date } = post;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setPost(resp.data);
      })
      .catch(console.warn);
  }, []);

  return (
    <div className={`container ${css.postContainer}`}>
      <div className={css.postTitleSection}>
        <h3 className={css.postTitle}>{title}</h3>
        <h3 className={css.postAuthor}>{author}</h3>
      </div>
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
          {/* <p className={css.postTags}>{tags?.join(', ')}</p> */}
          <div className={css.postTags}>
            {tags.map((tObj) => (
              <p className={css.postTag} key={tObj}>
                {tObj}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
