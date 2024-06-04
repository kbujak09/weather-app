import './app.scss';
import Search from './components/search/Search';
import { Context } from './contexts/context';
import { data as staticData } from './data';
import Current from './components/current/Current';
import { WeatherData } from './@types/types';

import { useEffect, useState } from 'react';

const App = () => { 

  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<WeatherData | object>({});

  // const apiKey = process.env.REACT_APP_API_KEY;

  // const fetchData = async () => {
  //   const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Lublin&aqi=yes`);
  //   const json = await res.json();
  //   setData(json);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [input]);

  useEffect(() => {
    setData(staticData);
    console.log(data);
  }, [])

  console.log(data);

  return (
    <div className="App">
      <Context.Provider value={{input, setInput, data}}>
        <div className="menu"></div>
        <div className="search">
          <Search />
        </div>
        <div className="current">
          <Current />
        </div>
        <div className="today"></div>
        <div className="air"></div>
        <div className="week"></div>
      </Context.Provider>
    </div>
  )
}
 
export default App;
