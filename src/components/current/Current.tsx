import styles from './current.module.scss';
import { Context } from '../../contexts/context';
import { WeatherData } from '../../@types/types';

import { useContext } from 'react';

const Current = () => {

  const { data } = useContext(Context);

  const weatherData = data as WeatherData;

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {weatherData.location.name}
      </div>
      <div className={styles.rain}>
        Chance of rain: {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%
      </div>
      <div className={styles.temp}>
        {weatherData.current.temp_c}°C
      </div>
    </div>
  )
};

export default Current;