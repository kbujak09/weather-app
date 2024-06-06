import './app.scss';
import Search from './components/search/Search';
import { data as staticData } from './data';
import Current from './components/current/Current';

import { useEffect, useState } from 'react';

const App = () => { 

  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<any>({});

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

  return (
    <div className="App">
        <div className="menu"></div>
        <div className="search">
          <Search input={input} setInput={setInput}/>
        </div>
        <div className="current">
          <Current data={data}/>
        </div>
        <div className="today"></div>
        <div className="air"></div>
        <div className="week"></div>
    </div>
  )
}
 
export default App;
