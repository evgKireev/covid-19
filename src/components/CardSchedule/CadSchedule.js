import styles from './CardSchedule.module.css'
function CardSchedule() {
  return (
    <div className={styles.Card}>
      <div>
        <select className={styles.select}>
          <option>All</option>
          <option>Today</option>
          <option>All 100</option>
          <option>All Today</option>
        </select>
        <input placeholder='' className={styles.input}></input>
      </div>
      <div>График</div>
    </div>
  );
}

export default CardSchedule
