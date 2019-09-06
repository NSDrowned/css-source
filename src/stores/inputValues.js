import { writable } from 'svelte/store';

const inputValues = writable({
    borderRadius: 2
});

export default inputValues;