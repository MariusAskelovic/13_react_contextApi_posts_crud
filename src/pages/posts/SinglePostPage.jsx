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
    <div>
      <p className='bigFont'>{title}</p>
    </div>
  );
}
