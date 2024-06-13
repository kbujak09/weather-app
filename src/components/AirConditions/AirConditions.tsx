import { AirInterface } from '../../@types/types';
import styles from './airconditions.module.scss';
import AirSection from './AirSection/AirSection';
import Title from '../Title/Title';

interface AirProps {
  data: AirInterface[] | null
}

const AirConditions: React.FC<AirProps> = ({data}) => {
  
  let i: number = 0;

  return (
    <div className={styles.container}>
      <Title text={'AIR CONDITIONS'}/>
      <div className={styles.data}>
        {
          data && data.map((item: AirInterface, index: number) => {
            return <AirSection data={item} key={i++}/>
          })
        }
      </div>
    </div>
  )
}

export default AirConditions;