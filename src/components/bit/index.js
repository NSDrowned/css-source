// Packages
import React from 'react';
import styled from 'styled-components';

const BitWrapper = styled.div`
    background-color: #FFF;
    margin-top: 14px;
    border-radius: 6px;
    padding: 12px 14px;
    padding-bottom: 10px;
    padding-right: 39px;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.15);
    line-height: 24px;
    position: relative;
`

const BitTitle = styled.div`
`

const BitSubtitle = styled.div`
    font-size: 12px;
    color: #999;
    line-height: 14px;
`
const LinkWrapper = styled.div`
    width: 25px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #30BB9C;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;

    &::before {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 7.5px 0 7.5px 8px;
        border-color: transparent transparent transparent #CEEEE6;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        background-color: #FFF;

        &::before {
            border-color: transparent transparent transparent #30BB9C;
        }
    }
`

const Tags = styled.div`
    margin-top: 8px;
    border: 1px dashed #EAECEF;
    background-color: #FCFCFC;
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
`
import Tag from './tag';

export default function Bit(props) {

    let tags = props.data.tags.map((tag) => {
        return <Tag key={tag} text={tag} />;
    });

	return (
		<BitWrapper>
            <BitTitle>{props.data.title}</BitTitle>
            <BitSubtitle>{props.data.description}</BitSubtitle>
            <LinkWrapper />
            <Tags>{tags}</Tags>
		</BitWrapper>
	);
};