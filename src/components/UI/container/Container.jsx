import css from './Container.module.css';

export default function Container(props) {
  const calculatedClass = props.className
    ? `${props.className} ${css.container}`
    : css.container;

  return <div className={calculatedClass}>{props.children}</div>;
}
