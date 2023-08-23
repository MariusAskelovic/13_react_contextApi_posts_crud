// situos komponentus mes turim generuoti PostsPage kaip nuorodas
// atvaizduoti title ir autoriu
import css from './SinglePostLink.module.css';
export default function SinglePostLink(props) {
  return (
    <li className={css.postsLi}>
      <h4 className={css.postsTitle}>{props.title}</h4>
      <p className={css.postsAuthor}>{props.author}</p>
    </li>
  );
}
