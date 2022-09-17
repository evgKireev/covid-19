import styles from './CardCases.module.css';

function CardCases({ value, cas, dea, recov, ff, cases, deaths, recovered, todayCases,todayDeaths,todayRecovered}) {
  let statistic;
  let statisticGlobal;
  let info;
  let style;

  ff.forEach((el) => {
    if (value === '1' || value === 'All') {
      statistic = el.cases;
      info = cas;
      style = styles.cases;
    } else if (value === '2' || value === 'All') {
      statistic = el.deaths;
      info = dea;
      style = styles.deaths;
    } else if (value === '3' || value === 'All') {
      statistic = el.recovered;
      info = recov;
      style = styles.recovered;
    } else if (value === '1' || value === 'Today') {
      statistic = el.todayCases;
      info = cas;
      style = styles.cases;
    } else if (value === '2' || value === 'Today') {
      statistic = el.todayDeaths;
      info = dea;
      style = styles.cases;
    } else if (value === '3' || value === 'Today') {
      statistic = el.todayRecovered;
      info = recov;
      style = styles.cases;
    }
  });

   if (value === '1' || value === 'All') {
    statisticGlobal = cases;
      info = cas;
      style = styles.cases;
    } else if (value === '2' || value === 'All') {
      statisticGlobal = deaths;
      info = dea;
      style = styles.deaths;
    } else if (value === '3' || value === 'All') {
      statisticGlobal = recovered;
      info = recov;
      style = styles.recovered;
    } else if (value === '1' || value === 'Today') {
      statisticGlobal = todayCases;
      info = cas;
      style = styles.cases;
    } else if (value === '2' || value === 'Today') {
      statisticGlobal = todayDeaths;
      info = dea;
      style = styles.cases;
    } else if (value === '3' || value === 'Today') {
      statisticGlobal = todayRecovered;
      info = recov;
      style = styles.cases;
    }

  function g() {
    const cod = (
      <div className={styles.CardCases}>
        <h3>Global {info}</h3>
        <span className={style}>{statisticGlobal}</span>
      </div>
    );

    const cod2 = ff.map((el, index) => {
      return (
        <div className={styles.CardCases} key={index}>
          <h3>{`${info} by: ${el.country}`} </h3>
          <span className={style}>{statistic}</span>
        </div>
      );
    });

    if (!ff.length) {
      return cod;
    } else return cod2;
  }

  return <>{g()}</>;
}

export default CardCases;
