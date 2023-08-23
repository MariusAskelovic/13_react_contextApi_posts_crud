// cia mes graziai atvaizuosim visa info esancia posto objekte
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import css from './SinglePostPage.module.css';
import { useAuth } from '../../store/AuthProvider';

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
  const { image, title, body, author, tags, date } = post;
  const { logout } = useAuth();
  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setPost(resp.data);
      })
      .catch(console.warn);
  }, []);

  function handleDelete() {
    axios
      .delete(url)
      .then((resp) => console.log(resp))
      .catch((error) => console.log('klaida: ', error));
  }
  function btnLogout() {
    logout();
    window.location.href = '/login';
  }

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
      <div className={css.postButtons}>
        <NavLink onClick={logout} className={css.postBtn} to={'/login'}>
          Logout
        </NavLink>
        <button onClick={btnLogout} className={css.postBtn}>
          Logout
        </button>
        <NavLink onClick={handleDelete} className={css.postBtn} to={'/login'}>
          DELETE
        </NavLink>
      </div>
    </div>
  );
}
