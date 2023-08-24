// situos komponentus mes turim generuoti PostsPage kaip nuorodas

import { Link } from 'react-router-dom';

// atvaizduoti title ir autoriu
export default function SinglePostLink(props) {
  return (
    <li>
      {/* vietoj "5" paduoti posto id */}
      <Link to={`/posts/${props.id}`}>
        {props.title} - <strong>by: </strong>
        {props.author}
      </Link>
    </li>
  );
}
