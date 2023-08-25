// cia mes graziai atvaizuosim visa info esancia posto objekte
import axios from 'axios';
import Container from '../../components/UI/container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Btn from '../../components/UI/btn/Btn';
import AddComment from '../../components/comments/AddComment';
import CommentsList from '../../components/comments/CommentsList';
import config from '../../config';
import noImageImage from '../../assets/no-image.jpg';

export default function SinglePostPage() {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState({});
  // const [commentsArr, setCommentsArr] = useState([]);
  // const commentUrl = config.commentsUrl;
  const url = config.postUrl;
  const currentPostUrl = `${url}/${postId}`;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(currentPostUrl)
      .then(({ data }) => {
        setCurrentPost(data);
      })
      .catch(console.warn);
    // axios
    //   .get(commentUrl)
    //   .then((resp) => {
    //     const commentPath = resp.data;
    //     console.log('commentPath ===', commentPath);
    //     setCommentsArr(resp.data);
    //   })
    //   .catch((error) => {
    //     console.warn('ivyko klaida:', error);
    //   });
  }, []);
  // pasiimti dinamine adreso dali (parametra) tai yra post id
  // parsisiusti su axios konkretu posta
  // 3083126839342818 yra posto id
  // http://localhost:5000/posts/3083126839342818
  const { title, body, author, tags, date, id, image } = currentPost;

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
  // const getId = id;
  // console.log('commentsArr ===', commentsArr);
  // const arrayX = commentsArr.filter((obj) => obj.postId === getId);
  // let imageLink = image ? image : noImageImage;

  return (
    <Container>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{date}</p>
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
      <hr />
      <div>
        <AddComment />
        <CommentsList id={id} />
        {/* <ul>
          {arrayX.map((obj) => (
            <li key={obj.postId}>{obj.text}</li>
          ))}
        </ul> */}
      </div>
    </Container>
  );
}
