<script>
    import InputValues from '../../../stores/inputValues.js';

    export let name;
    export let valueName;

    let checkValue = false;

    function validateInput(value) {
        InputValues.update(storedValues => {
            return { ...storedValues, [valueName] : value };
        });
    }
</script>

<label>{name}</label>
<input type="checkbox" bind:checked={checkValue} checked="{checkValue}" on:change={() => validateInput(checkValue)} >