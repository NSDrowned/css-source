// Packages
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background-color: #CCC;
    color: #555;
    height: 46px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    font-size: 12px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index-: 100;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

// Components
import Container from '@comp/container';

export default function Footer() {
	return (
		<FooterWrapper>
            <Container verticalCenter={true} textCenter={true}>
                <div>Maintained by <a href="https://github.com/NSDrowned/" target="_blank">NSDrowned</a></div>
            </Container>
		</FooterWrapper>
	);
};