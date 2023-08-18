import { Fruits } from "../../Fruits";
import {useState} from 'react';
import { SearchEvent } from "../../types";

const Search = () => {

  function handleChange(value: string) {
    setQuery(value);
  }
  
  const [query, setQuery] = useState('');
  const fruits = Fruits.filter(fruit => fruit.includes(query));
  return (
    <>
      <label htmlFor="searchInput">Search: </label>
      <input type="search" name="search" id="search" onChange={e => handleChange(e.target.value)}/>
      <ul>
        {fruits.map((fruit, i) => <li key={i}>{fruit}</li>)}
      </ul>
    </>
  );
}

export default Search;