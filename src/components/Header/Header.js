import styles from './Header.module.css';
import getDate from '../../utils/getDate';
function Header() {
  return (
    <header className={styles.header}>
      <div>COVID-19 Dashboard</div>
      <div>Last Updated At: {getDate()} </div>
    </header>
  );
}

export default Header;
