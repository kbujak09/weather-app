import './app.scss';
import Search from './components/search/Search';
import { data as staticData } from './data';
import Current from './components/current/Current';
import { CurrentInterface, HourInterface } from './@types/types';
import Today from './components/today/Today';

import { useEffect, useState } from 'react';
const { DateTime } = require('luxon');

const App = () => { 

  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<any>({});

  const isData = Object.keys(data).length > 0;

  const getHoursData = (): HourInterface[] => {

    const targetTimes = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

    return data.forecast.forecastday[0].hour
    .filter((hour: any) => {
      const formattedTime = DateTime.fromFormat(hour.time, 'yyyy-MM-dd HH:mm').toFormat('HH:mm');
      return targetTimes.includes(formattedTime);
    })
    .map((hour: any) => {
      return {
        temp_c: hour.temp_c,
        icon: hour.condition.icon,
        time: DateTime.fromFormat(hour.time, 'yyyy-MM-dd HH:mm').toFormat('HH:mm')
      }
    });
  }

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
  }, []);

  console.log(data);

  const currentData: CurrentInterface | null = isData ? {
    name: data.location.name,
    icon: data.current.condition.icon,
    daily_chance_of_rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
    temp_c: data.current.temp_c
  } : null;

  const todayData: HourInterface[] | null = isData ?
    getHoursData() : null;

  return (
    <div className="App">
        <div className="menu"></div>
        <div className="search">
          <Search input={input} setInput={setInput}/>
        </div>
        <div className="current">
          <Current data={currentData}/>
        </div>
        <div className="today">
          <Today data={todayData}/>
        </div>
        <div className="air"></div>
        <div className="week"></div>
    </div>
  )
}
 
export default App;
