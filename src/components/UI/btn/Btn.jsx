import css from './Btn.module.css';
export default function Btn(props) {
  return (
    <div className={css.btn} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
