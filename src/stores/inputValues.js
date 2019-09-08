import { writable } from 'svelte/store';

const inputValues = writable({
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    width: 'auto'
});

export default inputValues;