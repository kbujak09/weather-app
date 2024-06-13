import styles from './search.module.scss';

import { useCallback, useEffect, useState } from 'react';
const debounce = require('lodash.debounce');

interface SearchProps {
  setInput: (input: string) => void
}

const Search: React.FC<SearchProps> = ({setInput}) => {

  const [localInput, setLocalInput] = useState<string>('');

  const debouncedSetInput = useCallback(
    debounce((value:string) => {
      setInput(value);
    }, 1000), [setInput]
  );

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLocalInput(e.target.value);
    debouncedSetInput(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput(localInput);
  }

  useEffect(() => {
    return () => {
      debouncedSetInput.cancel();
    }
  }, [debouncedSetInput])

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
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