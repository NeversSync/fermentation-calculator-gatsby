import React, { useState} from 'react'
import styled from '@emotion/styled'

const SearchBar = styled.form`
margin: 10px;
`

export default function Searchbar({onFormSubmit}) {

    const [term, setTerm] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        onFormSubmit(term)
    }

    function onInputChange(event) {
        setTerm(event.target.value)
    }
    return (
        <div>
            <SearchBar onSubmit={onSubmit}>
                <input 
                type="text"  
                value={term} 
                onChange={onInputChange}></input>
            </SearchBar>
        </div>
    )
}
