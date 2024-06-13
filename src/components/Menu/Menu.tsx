import styles from './menu.module.scss';
import logo from '../../assets/logo.svg';

const Menu = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
    </div>
  )
}

export default Menu;