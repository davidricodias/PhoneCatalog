import React from 'react';
import './App.css';

import Phones from './components/Phones/Phones'
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  const [searchterm, setSearchterm] = React.useState('');
  return (
    <div className="App">
      <SearchBar setSearchterm={setSearchterm}/>
      <Phones filter={searchterm}/>
    </div>
  );
}

export default App;
