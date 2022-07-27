import { memo } from 'react';
import Content from '../../components/Content/Content';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={`${styles.wrapper}`}>
      <Content />
    </div>
  );
}

export default memo(Home);
