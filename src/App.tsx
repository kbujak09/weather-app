import './app.scss';
import Search from './components/search/Search';
import { Context } from './contexts/context';

import { useState } from 'react';

const App = () => { 

  const [input, setInput] = useState<string>('');

  return (
    <div className="App">
      <Context.Provider value={{input, setInput}}>
        <div className="menu"></div>
        <div className="search">
          <Search />
        </div>
        <div className="current"></div>
        <div className="today"></div>
        <div className="air"></div>
        <div className="week"></div>
      </Context.Provider>
    </div>
  )
}
 
export default App;
