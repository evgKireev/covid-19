// import { useState } from 'react';
import styles from './CardCountry.module.css';
import SelectedStat from '../Selected/Selected';
import SelectedDate from '../SelectedDate/SelectedDate';
function CardCountry({ onChange, onInput }) {
  return (
    <div className={styles.Card}>
      <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
        <SelectedDate onChange={onChange}/>
        <SelectedStat onChange={onChange} />
      </div>
      <div>
        <input
          style={{ outline: 'none' }}
          placeholder="Search..."
          className={styles.input}
          onInput={onInput}
        ></input>
      </div>
    </div>
  );
}

export default CardCountry;
