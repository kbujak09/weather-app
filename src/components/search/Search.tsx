import { Context } from '../../contexts/context';
import styles from './search.module.scss';

import { useCallback, useContext, useEffect } from 'react';
const debounce = require('lodash.debounce');

const Search = () => {

  const { setInput, input } = useContext(Context);

  const debouncedSetInput = useCallback(
    debounce((value:string) => {
      setInput(value);
    }, 1000), []
  );

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetInput(e.target.value);
  }

  useEffect(() => {
    return () => {
      debouncedSetInput.cancel();
    }
  }, [debouncedSetInput])

  useEffect(() => {
    console.log(input)
  }, [input])

  return (
    <form className={styles.container}>
      <input onChange={handleChange} className={styles.input} type="text" />
    </form>
  )
}

export default Search;