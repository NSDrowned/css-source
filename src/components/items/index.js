// Packages
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ContainerWrapper = styled.div`
	// position: absolute;
	// left: 0;
	// width: 100%;
	// height: calc(100% - 44px);
	// max-width: 400px;
	background-color: #F6F6F6;
	// border-right: 1px dashed #CCC;
	overflow: hidden;
	overflow-y: auto;
	direction: rtl;
	margin-left: -17px;
`;


// Components

import Search from './search'
import Item from '@comp/items/item';

export default function Items(props) {

	let items;
	let stateItems = useSelector((state) => state.items );
	let search = useSelector((state) => state.search );

	if(search) {
		items = stateItems.filter(item => item.title.toLowerCase().includes(search)).map(item => { return <Item key={item.key} data={item} /> });
	} else {
		items = stateItems.map((item) => { return <Item key={item.key} data={item} /> });
	}

	return (
		<ContainerWrapper>
			<Search />
			{items}
		</ContainerWrapper>
	);
};