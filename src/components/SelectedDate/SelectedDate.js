import styles from './SelectedDate.module.css';
function SelectedDate() {
  return (
    <select className={styles.select}>
      <option value="1">All</option>
      <option value="2">Today</option>
    </select>
  );
}

export default SelectedDate;
