import styles from './CardStatic.module.css'
function CardStatic (){
    return (
        <div className={styles.Card}>
        <select className={styles.select}>
          <option>All</option>
          <option>Today</option>
          <option>All 100</option>
          <option>All Today</option>
        </select>
        <div>
            <ul className={styles.ul}>
                <li>Country</li>
                <li>Cases</li>
                <li>Deaths</li>
                <li>Recovered</li>
            </ul>
            <ul className={styles.ul}>
                <li>Rassia</li>
                <li>1000</li>
                <li>2000</li>
                <li>3000</li>
            </ul>
        </div>
      </div>
    )
}

export default CardStatic