// Packages
import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 1024px;
`;

export default function Container(props) {
	return (
		<ContainerWrapper>
			{props.children}
		</ContainerWrapper>
	);
};