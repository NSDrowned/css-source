// Packages
import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
	width: 100%;
`

// Components
import Header from '@comp/header';
import Footer from '@comp/footer';

export default function DefaultLayout(props) {
	return (
		<>
			<Header />
			<ContentWrapper>
				{props.children}
			</ContentWrapper>
			{/* <Footer /> */}
		</>
	);
};