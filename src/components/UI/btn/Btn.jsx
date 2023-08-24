import css from './Btn.module.css';
export default function Btn(props) {
  const calcType = props.sub ? 'submit' : 'button';
  return (
    <button type={calcType} className={css.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
