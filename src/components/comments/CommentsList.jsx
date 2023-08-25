import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../../config';
import SingleComment from './SingleComment';

export default function CommentsList(props) {
  const [commentsArr, setCommentsArr] = useState([]);
  // const [filteredArr, setFilteredArr] = useState([]);
  const commentUrl = config.commentsUrl;
  useEffect(() => {
    axios
      .get(commentUrl)
      .then((resp) => {
        // const commentPath = resp.data;
        // console.log('commentPath ===', commentPath);
        setCommentsArr(resp.data);
        // console.log('commentsArr ===', commentsArr);
      })
      .catch((error) => {
        console.warn('ivyko klaida CommentsList:', error);
      });
  }, []);
  // console.log('commentsArr ===', commentsArr);
  // console.log('props 111111111===', props);
  const filterArr = commentsArr.filter((obj) => obj.postId === props.id);
  // console.log('filterArr ===', filterArr);
  // setFilteredArr(filterArr.length > 0 ? filterArr : commentsArr);
  return (
    <div>
      {filterArr.map((obj) => (
        <SingleComment
          key={obj.id}
          authorEmail={obj.authorEmail}
          id={obj.id}
          text={obj.text}
        />
      ))}
    </div>
  );
}
