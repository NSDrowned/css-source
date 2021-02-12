import Head from 'next/head'

import DefaultLayout from '@layout/default';

import Bit from '@comp/bit';

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
];

let items = entries.map((item) => {
  return <Bit key={item.key} data={item} />;
});

export default function Home() {
  return (
    <DefaultLayout>
      {items}
    </DefaultLayout>
  )
}
