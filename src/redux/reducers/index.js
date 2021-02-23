// Packages
import { combineReducers } from 'redux';

// Slices
import itemsSlice from '../slices/items';
import searchSlice from '../slices/search';

const rootReducer = combineReducers({
	items: itemsSlice,
	search: searchSlice
});

export default rootReducer;