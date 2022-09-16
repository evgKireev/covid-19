import styles from './CardCases.module.css';
function CardCases({ props }) {
console.log(props) 

//   if (value === '1') {
//     statistic = ` cases: ${cases}`;
//   } else if (value === '2') {
//     statistic = ` cases: ${deaths}`;
//   } else if (value === '3') {
//     statistic = ` cases: ${recovered}`;
//   }

  return (
    <div className={styles.CardCases}>
      <h3>Global </h3>
      <span className={styles.span}>5 707 688</span>
    </div>
  );
}

export default CardCases;
