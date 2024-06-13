import { HourInterface } from '../../../@types/types';
import styles from './todaysection.module.scss';

interface TodaySectionProps {
  data: HourInterface | null;
}

const TodaySection: React.FC<TodaySectionProps> = ({data}) => {
  return (
    data && <div className={styles.container}>
      <div className={styles.hour}>{data.time}</div>
      <div className={styles.image}>
        <img src={data.icon} alt="" />
      </div>
      <div className={styles.temp}>{Math.round(data.temp_c)} °C</div>
    </div>
  )
};

export default TodaySection;