import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/actionCreator';
import { toast } from 'react-toastify';
import { memo } from 'react';
import styles from './Header.module.scss';

function Header() {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.user.token);
  const onHandleLogout = () => {
    dispatch(logoutUser());
  };

  const redirectPage = () => {
    if (!userToken) toast.warn('You have to login first !');
  };

  return (
    <nav className={`${styles.navbar}`}>
      {/* LOGO */}
      <div className={`${styles.logo}`}>
        <NavLink to="/" className={`${styles.logo_anchor}`}>
          Animals
        </NavLink>
      </div>
      {/* LOGO */}
      {/* NAVIGATION MENU */}
      <ul className={`${styles.nav_links}`}>
        {/* USING CHECKBOX HACK */}
        <input
          type="checkbox"
          id="checkbox_toggle"
          className={`${styles.input}`}
        />
        <label htmlFor="checkbox_toggle" className={`${styles.hamburger}`}>
          ☰
        </label>
        {/* NAVIGATION MENUS */}
        <div className={`${styles.menu}`}>
          <li className={`${styles.menu_list}`}>
            <NavLink to="/" className={`${styles.menu_anchor}`}>
              Home
            </NavLink>
          </li>
          <li className={`${styles.menu_list}`}>
            <NavLink to="/about" className={`${styles.menu_anchor}`}>
              About
            </NavLink>
          </li>
          <li className={`${styles.menu_list}`}>
            <NavLink
              onClick={redirectPage}
              to="/viewanimals"
              className={`${styles.menu_anchor}`}
            >
              View Animals
            </NavLink>
          </li>
        </div>
      </ul>
      {!userToken ? (
        <NavLink to="/login" type="button" className={`${styles.btn}`}>
          Login
        </NavLink>
      ) : (
        <div>
          <span className={`${styles.custom_span}`}>Hi, you!</span>
          <NavLink
            to="/"
            onClick={onHandleLogout}
            type="button"
            className={`${styles.btn}`}
          >
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default memo(Header);
