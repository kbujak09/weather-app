import styles from './search.module.scss';

import { useCallback, useEffect } from 'react';
const debounce = require('lodash.debounce');

interface SearchProps {
  input: string,
  setInput: (input: string) => void
}

const Search: React.FC<SearchProps> = ({setInput, input}) => {

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

  return (
    <form className={styles.container}>
      <input 
        onChange={handleChange} 
        className={styles.input} 
        type="text"
        placeholder='Search for cities' 
        />
    </form>
  )
}

export default Search;