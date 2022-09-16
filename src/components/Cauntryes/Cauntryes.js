import Cauntry from '../Cauntry/Cauntry';
import styles from './Cauntryes.module.css';
function Cauntryes({ datas, value, valueInput }) {
  datas = datas.filter((el) =>
    el.country.toLocaleLowerCase().includes(valueInput)
  );

  return (
    <div className={styles.Card}>
      {valueInput
        ? datas.map((data) => {
            return <Cauntry {...data} key={data.country} value={value} />;
          })
        : datas.map((data) => {
            return <Cauntry {...data} key={data.country} value={value} />;
          })}
    </div>
  );
}

export default Cauntryes;
