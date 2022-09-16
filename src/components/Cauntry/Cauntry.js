import styles from './Cauntry.module.css';

function Cauntry(props) {
  const { cases, deaths, recovered, country, countryInfo, value } = props;
  let statistic;
  let style
  if (value === '1') {
    statistic = cases;
    style = styles.cases;
  } else if (value === '2') {
    statistic = deaths;
    style = styles.deaths;
  } else if (value === '3') {
    statistic = recovered;
    style = styles.recovered;
  }
  return (
    <div className={styles.itemCountry}>
      <img src={countryInfo.flag} alt="flag"></img>
      <p>{country}</p>
      <p className={style}>({statistic})</p>
    </div>
  );
}

export default Cauntry;
