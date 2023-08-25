import css from './SingleComment.module.css';
export default function SingleComment(props) {
  return (
    <div className={css.commentBlock}>
      <h3>{props.id}</h3>
      <h2>{props.authorEmail}</h2>
      <p>{props.text}</p>
    </div>
  );
}
