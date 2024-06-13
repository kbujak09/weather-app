import styles from './airsection.module.scss';
import { AirInterface } from '../../../@types/types';

interface AirSectionProps {
  data: AirInterface | null
};

const AirSection: React.FC<AirSectionProps> = ({data}) => {
  return (
    data && <div className={styles.container}>
      <div className={styles.name}>
        {data.name}
      </div>
      <div className={styles.value}>
        {data.value}
      </div>
    </div>
  )
};

export default AirSection;