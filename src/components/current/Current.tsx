import styles from './current.module.scss';
import { CurrentInterface } from '../../@types/types';

interface CurrentProps {
  data: CurrentInterface
}

const Current: React.FC<CurrentProps> = ({data}) => { 

  const weatherData = data as CurrentInterface;

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {weatherData.location.name}
        <div className={styles.image}>
          <img src={weatherData.current.condition.icon} alt="current condition" />
        </div>
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