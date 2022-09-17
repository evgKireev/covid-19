import styles from './SelectedDate.module.css';
function SelectedDate({onChange}) {
  return (
    <select className={styles.select} onChange = {onChange}>
      <option value="All">All</option>
      <option value="Today">Today</option>
    </select>
  );
}

export default SelectedDate;
