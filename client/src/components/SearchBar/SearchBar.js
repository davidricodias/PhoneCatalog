import React from 'react';

function SearchBar(props){

    return(
        <div className='searchbar'>
            <input type='text' placeholder='Search phone' onChange={event => {props.setSearchterm(event.target.value)}}/>
        </div>
    )
}

export default SearchBar;