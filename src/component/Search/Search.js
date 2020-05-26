import React, { useState } from 'react';
import './Search.css';
import search from './search.svg';
import close from './close.svg';

const Search = (prosp) => {
    let [state, setState] = useState(false);
    
    return <div className="Search">
        <img src={search} alt="" />
        <input type='text'
            className={state ? "input inputWidth": "input"}
            placeholder="Search"
            onFocus={() => setState(true)}
        />
        {
            state &&
            <img src={close} alt="" 
                onClick={() => setState(false)}
            />
        }
    </div>
}

export default Search;