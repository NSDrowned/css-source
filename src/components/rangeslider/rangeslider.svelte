<script>
    import InputValues from '../../stores/inputValues.js';
    
    export let name;
    export let minValue;
    export let maxValue;
    export let valueName;

    let rangeValue = 0;

    function validateInput(value) {
        InputValues.update(storedValues => {
            return { [valueName] : value };
        });
    }

</script>

<style>
    .numberInput {
        border: 1px dotted #CCC;
        width: 40px;
        border-radius: 5px;
    }
</style>

<label>{name}</label>
<input type="range" min={minValue} max={maxValue} on:input={() => validateInput(rangeValue)} bind:value={rangeValue} value="{rangeValue}" class="slider" id="myRange">
<input class="numberInput" type="text" bind:value={rangeValue} on:input={() => validateInput(rangeValue)} value="{rangeValue}">