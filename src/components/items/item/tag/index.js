// Packages
import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.div`
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: block;
    height: 20px;
    line-height: 21px;
    padding: 0 12px 0 7px;
    position: relative;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
    margin: 4px 0;
    margin-right: 8px;

    &::after {
        background: #fff;
        border-bottom: 10px solid transparent;
        border-left: 6px solid #eee;
        border-top: 10px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }

    &:hover {
        background-color: #30BB9C;
        color: white;
    }

    &:hover::after {
        border-left-color: #30BB9C;
    }
`

export default function Tag(props) {
	return (
		<TagWrapper>
            {props.text}
		</TagWrapper>
	);
};