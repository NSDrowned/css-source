<script>
    import InputValues from '../../../stores/inputValues.js';
    
    export let name;
    export let minValue;
    export let maxValue;
    export let valueName;

    let rangeValue = 0;

    function validateInput(value) {
        InputValues.update(storedValues => {
            return { ...storedValues, [valueName] : value };
        });
    }

</script>

<style lang="scss">
    .numberInput {
        background-color: transparent;
        border: 0;
        margin: 0;
        color: #FFF;
        height: 34px;
        width: 60px;
        text-align: center;
        overflow: visible;
        top: -1px;
        left: -1px;
        position: relative;
        outline: none;
    }

    // Base Colors

    $shade-10: #2c3e50;
    $shade-1: #d7dcdf;
    $shade-0: #fff;
    $teal: #1abc9c;

    .range-slider {
        margin-bottom: 14px;
    }

    // Range Slider
    $range-width: 100%;
    $range-handle-color: $shade-10;
    $range-handle-color-hover: $teal;
    $range-handle-size: 20px;
    $range-track-color: $shade-1;
    $range-track-height: 10px;
    $range-label-color: $shade-10;
    $range-label-width: 60px;

    input[type=range] {
        width: $range-width;
    }

    input[type=range] {
        -webkit-appearance: none;
        appearance: none;
        width: calc(100% - (#{$range-label-width + 13px}));
        height: $range-track-height;
        border-radius: 5px;
        background: $range-track-color;
        outline: none;
        padding: 0;
        margin: 0;
    }
    // Range Handle
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: $range-handle-size;
        height: $range-handle-size;
        border-radius: 50%;
        background: $range-handle-color;
        cursor: pointer;
        transition: background .15s ease-in-out;

        &:hover {
            background: $range-handle-color-hover;
        }
    }

    input[type=range]:active::-webkit-slider-thumb {
        background: $range-handle-color-hover;
    }

    input[type=range]::-moz-range-thumb {
        width: $range-handle-size;
        height: $range-handle-size;
        border: 0;
        border-radius: 50%;
        background: $range-handle-color;
        cursor: pointer;
        transition: background .15s ease-in-out;

        &:hover {
            background: $range-handle-color-hover;
        }
    }

    input[type=range]:active::-moz-range-thumb {
        background: $range-handle-color-hover;
    }
    
    // Focus state
    
    input[type=range]:focus::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px $shade-0, 0 0 0 6px $teal;
    }

    // Range Label
    .range-slider__value {
        display: inline-block;
        position: relative;
        width: $range-label-width;
        color: $shade-0;
        line-height: 20px;
        text-align: center;
        border-radius: 3px;
        background: $range-label-color;
        margin-left: 8px;
        top: 2px;

        &:after {
            position: absolute;
            top: 10px;
            left: -7px;
            width: 0;
            height: 0;
            border-top: 7px solid transparent;
            border-right: 7px solid $range-label-color;
            border-bottom: 7px solid transparent;
            content: '';
        }
    }

    // Firefox Overrides
    ::-moz-range-track {
        background: $range-track-color;
        border: 0;
    }

    input::-moz-focus-inner,
    input::-moz-focus-outer { 
        border: 0; 
    }
</style>

<label>{name}</label>
<div class="range-slider">
    <input class="range-slider__range" type="range" min={minValue} max={maxValue} on:input={() => validateInput(rangeValue)} bind:value={rangeValue} value="{rangeValue}">
    <span class="range-slider__value"><input class="numberInput" type="text" bind:value={rangeValue} on:input={() => validateInput(rangeValue)} value="{rangeValue}"></span>
</div>