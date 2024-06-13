import styles from './today.module.scss';
import { HourInterface } from '../../@types/types';
import TodaySection from './TodaySection/TodaySection';
import Title from '../Title/Title';

interface TodayProps {
  data: HourInterface[] | null
}

const Today: React.FC<TodayProps> = ({data}) => {

  let i: number = 0;

  return (
    <div className={styles.container}>
      <Title text={"TODAY'S FORECAST"}/>
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