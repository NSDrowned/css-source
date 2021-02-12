// Packages
import React from 'react';

// Components
import Header from '@comp/header';
import Menu from '@comp/menu';
import Container from '@comp/container';
import Items from '@comp/items';
import Footer from '@comp/footer';

export default function DefaultLayout(props) {
	return (
		<>
			<Header />
			<Menu />
			<br></br>
			<br></br>
			<Items>
				{props.children}
			</Items>
			{/* <Footer /> */}
		</>
	);
};