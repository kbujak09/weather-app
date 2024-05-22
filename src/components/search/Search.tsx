import { Context } from '../../contexts/context';
import styles from './search.module.scss';

import { useContext } from 'react';

const Search = () => {

  const { setInput } = useContext(Context);

  return (
    <form className={styles.container}>
      <input onChange={(e) => setInput(e.target.value)} className={styles.input} type="text" />
    </form>
  )
}

export default Search;