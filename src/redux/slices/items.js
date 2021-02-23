// Packages
import { createSlice } from '@reduxjs/toolkit';

// Initial state

const initialItems = [
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

const itemsSlice = createSlice({
	name: 'items',
	initialState: initialItems,
	reducers: {
		// setBoxActive: ( state, action ) => { state.ui.boxActive = action.payload },
		// setSelectedDealers: ( state, action ) => { state.data.selectedDealers = action.payload },
		// saveFirstName: ( state, action ) => { state.data.first = action.payload },
		// saveLastName: ( state, action ) => { state.data.last = action.payload },
		// savePhoneNumber: ( state, action ) => { state.data.phone = action.payload },
		// saveAddress: ( state, action ) => { state.data.address = action.payload },
		// saveEmail: ( state, action ) => { state.data.email = action.payload }
	}
});

// export const { setBoxActive, setSelectedDealers, saveFirstName, saveLastName, savePhoneNumber, saveAddress, saveEmail } = stepTwoSlice.actions;

export default itemsSlice.reducer