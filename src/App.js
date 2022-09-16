import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardCases from './components/CardCases/CardCases';
import CardCountry from './components/CardCountry/CardCountry';
import Cauntryes from './components/Cauntryes/Cauntryes';

const API_URL = 'https://disease.sh/v3/covid-19/countries';
const API_URL_ALL ='https://disease.sh/v3/covid-19/all'

function App() {
  const [dates, setDates] = useState([]);
  const [dataAll, setDataAll] = useState({})
  const [value, setValue] = useState('1');
  const [valueInput, setValueInput] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const datas = await res.json();
        setDates(datas);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL_ALL);
        const dataAll = await res.json();
        setDataAll(dataAll);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="Main">
        <div style={{flexBasis : 300}}>
          <CardCases dataAll = {...dataAll} value={value} />
          <CardCountry onChange={(e) => setValue(e.target.value)} onInput={(e)=>setValueInput(e.target.value.toLocaleLowerCase().trim())} />
          <Cauntryes datas={dates} value={value} valueInput={valueInput} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
