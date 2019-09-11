import { writable } from 'svelte/store';

const inputValues = writable({
    borderRadius: 6,
    borderRadiusUnit: 'px',    
    borderWidth: 2,
    fontSize: 14,
    fontSizeUnit: 'px',
    borderColor: '#666',
    width: 'auto',
    placeHolderColor: null
});

export default inputValues;