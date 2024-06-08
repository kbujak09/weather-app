import styles from './today.module.scss';
import { HourInterface } from '../../@types/types';
import TodaySection from './todaysection/TodaySection';

interface TodayProps {
  data: HourInterface[] | null
}

const Today: React.FC<TodayProps> = ({data}) => {

  let i: number = 0;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        TODAY'S FORECAST
      </div>
      <div className={styles.data}>
          { 
            data && data.map((item: HourInterface) => {
              return <TodaySection key={i++} data={item}/>;
            }) 
          }
        </div>
    </div>
  )
};

export default Today;