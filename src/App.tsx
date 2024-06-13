import './app.scss';
import Search from './components/Search/Search';
import Current from './components/Current/Current';
import { CurrentInterface, HourInterface, AirInterface, ForecastInterface } from './@types/types';
import Today from './components/Today/Today';
import AirConditions from './components/AirConditions/AirConditions';
import Forecast from './components/Forecast/Forecast';

import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
const { DateTime } = require('luxon');

const App = () => { 

  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  const getForecastData = (forecastDays: any, days: number): ForecastInterface[] => {
    return forecastDays.slice(1, days + 1).map((day: any) => ({
      date: day.date,
      max_temp_c: day.day.maxtemp_c,
      min_temp_c: day.day.mintemp_c,
      daily_chance_of_rain: day.day.daily_chance_of_rain,
      condition: {
        text: day.day.condition.text,
        icon: day.day.condition.icon,
      },
      wind: day.day.maxwind_kph,
      humidity: day.day.avghumidity,
      uv: day.day.uv,
      sun_set: day.astro.sunset,
      sun_rise: day.astro.sunrise
    }));
  };

  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchData = async (input: string) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${input}&days=7&aqi=no&alerts=no`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      const json = await res.json();
      if (!json.error) {
        setData(json);
        setError(false);
        setErrorMessage('');
      }
      else {
        setError(true);
        setErrorMessage(json.error.message);
      }
    }
    catch (err) {
      console.log(err);
      setError(true);
      setErrorMessage('Fetching data error');
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData('Tokyo');
  }, [])

  useEffect(() => {
    console.log(input)
    if (input.length !== 0) {
      fetchData(input);
    }
  }, [input]);

  const currentData: CurrentInterface | null = isData ? {
    name: data.location.name,
    icon: data.current.condition.icon,
    daily_chance_of_rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
    temp_c: data.current.temp_c
  } : null;

  const todayData: HourInterface[] | null = isData ? getHoursData() : null;

  const airData: AirInterface[] | null = isData ? [
    {
      name: 'Real Feel',
      value: `${Math.round(data.current.feelslike_c)}°C `
    },
    {
      name: 'Wind',
      value: `${Math.round(data.current.wind_kph)} km/h`
    },
    {
      name: 'Chance of rain',
      value: `${data.forecast.forecastday[0].day.daily_chance_of_rain} %` 
    },
    {
      name: 'UV Index',
      value: data.current.uv
    }
  ] : null;

  const ForecastData: ForecastInterface[] | null = isData ? getForecastData(data.forecast.forecastday, 2) : null;

  return (
    <div className="App">
        <div className="menu"></div>
        <div className="search">
          <Search setInput={setInput}/>
        </div>
        {
        !error ? 
        isLoading ? 
        <div className={'loader'}>
          <ReactLoading type={'spinningBubbles'} color='#FFFFFF'/>
        </div> 
        : 
        <>
          <div className="current">
            <Current data={currentData}/>
          </div>
          <div className="today">
            <Today data={todayData}/>
          </div>
          <div className="air">
            <AirConditions data={airData}/>
          </div>
          <div className="future">
            <Forecast data={ForecastData}/>
          </div>
        </> 
          :
        <div className={'error'}>
          <div className={'errorText'}>{errorMessage}</div>
        </div>  
        }
    </div>
  )
}
 
export default App;
