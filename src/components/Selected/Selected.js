import styles from './Selected.module.css';
function Selected({onChange}) {
  return (
    <select className={styles.select} onChange = {onChange}>
      <option value="1">Cases</option>
      <option value="2">Deaths</option>
      <option value="3">Recovered</option>
    </select>
  );
}

export default Selected;
