import { ForecastInterface } from '../../../@types/types';
import styles from './forecastsection.module.scss';

const { DateTime } = require('luxon');

type ForecastSectionProps = {
  data: ForecastInterface | null;
}

type GridItemType = {
  name: string,
  value: number | string,
}

const convertTo24Format = (time12h: string): string => {
  return DateTime.fromFormat(time12h, 'hh:mm a').toFormat('HH:mm');
};

const GridItem = ({name, value}: GridItemType) => {
  return (
    <div className={styles.gridItem}>
      <div className={styles.gridItemName}>
        {name}
      </div>
      <div className={styles.gridItemValue}>
        {value}
      </div>
    </div>
  )
}

const ForecastSection: React.FC<ForecastSectionProps> = ({data}) => {
  return (
    data && <div className={styles.container}>
      <div className={styles.flexbox}>
        <div className={styles.date}>
          {DateTime.fromISO(data.date).toFormat('dd.MM')}
        </div>
        <div className={styles.condition}>
          <div className={styles.icon}>
            <img src={data.condition.icon} alt="" />
          </div>
          <div className={styles.text}>
            {data.condition.text}
          </div>
        </div>
        <div className={styles.temps}>
          <div className={styles.maxTemp}>
            {Math.round(data.max_temp_c)}
          </div>
          /
          <div className={styles.minTemp}>
          {Math.round(data.min_temp_c)}
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <GridItem name={'Chance of rain'} value={`${data.daily_chance_of_rain}%`}/>
        <GridItem name={'Humidity'} value={`${data.humidity}%`}/>
        <GridItem name={'Wind'} value={`${Math.round(data.wind)} km/h`}/>
        <GridItem name={'UV Index'} value={data.uv}/>
        <GridItem name={'Sun rise'} value={convertTo24Format(data.sun_rise)}/>
        <GridItem name={'Sun set'} value={convertTo24Format(data.sun_set)}/>
      </div>
    </div>
  )
};

export default ForecastSection;