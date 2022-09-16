import styles from './CardMaps.module.css'
function CardMaps() {
    return(
        <div className={styles.Card}>
        <div>
          <select className={styles.select}>
            <option>All</option>
            <option>Today</option>
            <option>All 100</option>
            <option>All Today</option>
          </select>
          <select className={styles.select}>
            <option>Cases</option>
            <option>Deaths</option>
            <option>Recovered</option>
          </select>
        </div>
        <div>
         Карта
        </div>
      </div>
    )
    
}

export default CardMaps