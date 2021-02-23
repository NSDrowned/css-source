// Packages
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setSearch } from '../../../redux/slices/search';


const SearchWrapper = styled.div`
    position: sticky;
    width: 100%;
    padding-left: 30px;
    background-color: #E7E7E7;
    padding: 14px;
    z-index: 10;
    top: 0;
    left: 0;
    border-left: 1px solid #CCC;
    border-bottom: 1px solid #CCC;
    border-right: 1px solid #CCC;
    direction: ltr;

    & > svg {
        position: absolute;
        top: 19px;
        left: 20px;
        fill: #CCC;
    }

    & > input {
        width: 99%;
        height: 28px;
        border: 0;
        font-size: 14px;
        outline: none;
        padding-left: 30px;
        border-radius: 12px;
    }
`

// Components


export default function Search() {

    const dispatch = useDispatch();

    function handleChange(e) {
        if(e.target.value) {
            dispatch( setSearch( e.target.value ) );
        } else {
            dispatch( setSearch( '' ) );
        }
    }

	return (
        <SearchWrapper>
            <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
            </svg>
            <input type="text" placeholder="Quick find..." onChange={handleChange} />
        </SearchWrapper>
	);
};