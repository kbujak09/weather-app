import styles from './forecast.module.scss';
import { ForecastInterface } from '../../@types/types';
import Title from '../Title/Title';
import ForecastSection from './ForecastSection/ForecastSection';

type ForecastProps = {
  data: ForecastInterface[] | null;
}

const Forecast: React.FC<ForecastProps> = ({data}) => {

  let i: number = 0;

  return (
    <div className={styles.container}>
      <Title text={'FORECAST'}/>
      <div className={styles.data}>
        {
          data?.map((item: ForecastInterface) => {
            return <ForecastSection data={item} key={i++}/>
          })
        }
      </div>
    </div>
  )
};

export default Forecast;