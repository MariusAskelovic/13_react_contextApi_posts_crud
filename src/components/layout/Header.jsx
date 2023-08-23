import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.wrap}>
      <div className={`container ${css.flex}`}>
        <Link href='/' className={css.logo}>
          Logo
        </Link>
        <nav>
          <NavLink className={css.navLink} to={'/'}>
            Home
          </NavLink>
          <NavLink className={css.navLink} to={'/posts'}>
            Posts
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
