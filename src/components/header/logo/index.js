// Packages
import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.img`
    position: relative;
`

// Components

export default function Logo() {
	return (
		<LogoWrapper src="/logo-css-source-lightgray.png" />
	);
};