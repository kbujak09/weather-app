import styles from './current.module.scss';
import { CurrentInterface } from '../../@types/types';

interface CurrentProps {
  data: CurrentInterface | null
}

const Current: React.FC<CurrentProps> = ({data}) => { 

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {data.name}
        <div className={styles.image}>
          <img src={data.icon} alt="current condition" />
        </div>
      </div>
      <div className={styles.rain}>
        Chance of rain: {data.daily_chance_of_rain}%
      </div>
      <div className={styles.temp}>
        {data.temp_c}°C
      </div>
    </div>
  )
};

export default Current;