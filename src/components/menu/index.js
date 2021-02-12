// Packages
import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
    position: relative;
    width: 100%;
    height: 38px;
    background-color: #777;
    z-index: 50;

    & > div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 38px;
    }
`

const SearchWrapper = styled.div`
    position: relative;
    border-radius: 5px;
    padding-left: 30px;
    background-color: #FFF;
    height: 28px;
    width: 50%;

    & > svg {
        position: absolute;
        top: 5px;
        left: 8px;
        fill: #CCC;
    }

    & > input {
        width: 99%;
        height: 28px;
        border: 0;
        font-size: 15px;
        outline: none;
    }
`

// Components
import Container from '@comp/container';

export default function Menu() {
	return (
		<MenuWrapper>
            <Container>
                <SearchWrapper>
                    <svg width="18" height="18" viewBox="0 0 18 18">
                        <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
                    </svg>
                    <input type="text" placeholder="Search..." />
                </SearchWrapper>
            </Container>
		</MenuWrapper>
	);
};