import React, { Component } from 'react';

function SearchBox(props) {
    return (
        <div>
            <input onChange={props.handleInput} type="text" placeholder="Search Employees..."/>
        </div>
    )
}

export default SearchBox;