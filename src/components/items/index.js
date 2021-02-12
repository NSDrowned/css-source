// Packages
import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
	width: 100%;
	height: 100%;
	max-width: 400px;
	padding: 14px;
	background-color: #F6F6F6;
	border-right: 1px dashed #CCC;
	position: fixed;
	left: 0;
	top: 84px;
`;

export default function Container(props) {
	return (
		<ContainerWrapper>
			{props.children}
		</ContainerWrapper>
	);
};