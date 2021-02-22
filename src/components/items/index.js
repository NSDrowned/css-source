// Packages
import React from 'react';
import styled from 'styled-components';

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

let entries = [
	{
	  key: 1,
	  title: 'Center a div vertically',
	  description: 'Center a div element vertically inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'vertical', 'vertically']
	},
	{
	  key: 2,
	  title: 'Center a div horizontally',
	  description: 'Center a div element horizontally inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'horizontal', 'horizontally']
	},
	{
	  key: 3,
	  title: 'Center a div horizontally and vertically',
	  description: 'Center a div element horizontally and vertically inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'vertically', 'horizontally']
	},
	{
	  key: 4,
	  title: 'Center an absolute div horizontally',
	  description: 'Center a div element horizontally inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'horizontal', 'horizontally']
	},
	{
	  key: 5,
	  title: 'Flip an image',
	  description: 'Flip an image horizontally in one line',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['flip', 'image']
	},
	{
	  key: 6,
	  title: 'Center a div vertically',
	  description: 'Center a div element vertically inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'vertical', 'vertically']
	},
	{
	  key: 7,
	  title: 'Center a div horizontally',
	  description: 'Center a div element horizontally inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'horizontal', 'horizontally']
	},
	{
	  key: 8,
	  title: 'Center a div horizontally and vertically',
	  description: 'Center a div element horizontally and vertically inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'vertically', 'horizontally']
	},
	{
	  key: 9,
	  title: 'Center an absolute div horizontally',
	  description: 'Center a div element horizontally inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'horizontal', 'horizontally']
	},
	{
	  key: 10,
	  title: 'Flip an image',
	  description: 'Flip an image horizontally in one line',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['flip', 'image']
	},
	{
	  key: 11,
	  title: 'Center a div vertically',
	  description: 'Center a div element vertically inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'vertical', 'vertically']
	},
	{
	  key: 12,
	  title: 'Center a div horizontally',
	  description: 'Center a div element horizontally inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'horizontal', 'horizontally']
	},
	{
	  key: 13,
	  title: 'Center a div horizontally and vertically',
	  description: 'Center a div element horizontally and vertically inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'vertically', 'horizontally']
	},
	{
	  key: 14,
	  title: 'Center an absolute div horizontally',
	  description: 'Center a div element horizontally inside a page or another div',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['center', 'div', 'horizontal', 'horizontally']
	},
	{
	  key: 15,
	  title: 'Flip an image',
	  description: 'Flip an image horizontally in one line',
	  author: 'NSDrowned',
	  url: '/center-div',
	  tags: ['flip', 'image']
	},
  ];

  let items = entries.map((item) => {
	return <Item key={item.key} data={item} />;
  });


export default function Items(props) {
	return (
		<ContainerWrapper>
			<Search />
			{items}
		</ContainerWrapper>
	);
};