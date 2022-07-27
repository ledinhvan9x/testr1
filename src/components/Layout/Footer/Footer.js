import { memo } from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={`${styles.footer}`}>
        <p className="text">Copyright © 2022. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
