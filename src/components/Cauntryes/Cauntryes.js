import Cauntry from '../Cauntry/Cauntry';
import styles from './Cauntryes.module.css';
function Cauntryes({ datas, value, valueInput, f}) {
  datas = datas.filter((el) =>
    el.country.toLocaleLowerCase().includes(valueInput)
  );

  return (
    <div className={styles.Card}>
      {valueInput
        ? datas.map((data, index) => {
            return (
              <Cauntry
                {...data}
                key={data.country}
                value={value}
                index={index}
                f={f}

              />
            );
          })
        : datas.map((data, index) => {
            return (
              <Cauntry
                {...data}
                key={data.country}
                value={value}
                index={index}
                f={f}
              />
            );
          })}
    </div>
  );
}

export default Cauntryes;
