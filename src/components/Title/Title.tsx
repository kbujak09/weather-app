import styles from './title.module.scss';

type titleProps = {
  text: string;
};

const Title = ({text}: titleProps) => {
  return (
    <div className={styles.container}>
      {text}
    </div>
  )
};

export default Title;