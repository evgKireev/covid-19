import styles from './Cauntry.module.css';

function Cauntry(props) {
  const {
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    country,
    countryInfo,
    value,
    index,
    f,
  } = props;
  let statistic;
  let style;
  if (value === '1' || value === 'All') {
    statistic = cases;
    style = styles.cases;
  } else if (value === '2' || value === 'All') {
    statistic = deaths;
    style = styles.deaths;
  } else if (value === '3' || value === 'All') {
    statistic = recovered;
    style = styles.recovered;
  } else if (value === '1' || value === 'Today') {
    statistic = todayCases;
    style = styles.cases;
  } else if (value === '2' || value === 'Today') {
    statistic = todayDeaths;
    style = styles.cases;
  } else if (value === '3' || value === 'Today') {
    statistic = todayRecovered;
    style = styles.cases;
  }

  return (
    <div className={styles.itemCountry} onClick={() => f(index)}>
      <img src={countryInfo.flag} alt="flag"></img>
      <p>{country}</p>
      <p className={style}>({statistic})</p>
    </div>
  );
}

export default Cauntry;
