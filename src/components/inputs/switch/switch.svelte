<script>
    import InputValues from '../../../stores/inputValues.js';

    export let name;
    export let valueName;
    export let falseOption;
    export let trueOption;

    let checkValue = false;

    function validateInput(value) {
        InputValues.update(storedValues => {
            return { ...storedValues, [valueName] : value };
        });
    }
</script>

<style lang="scss">
    .switchWrapper {
        border: 1px dotted #CCC;
        padding: 14px;
        text-align: center;
        margin-top: 8px;
        padding-top: 8px;
        max-width: 300px;

        .falsetext,
        .truetext {
            font-size: 12px;
            display: inline-block;
        }
        .switch {
            position: relative;
            margin-left: 4px;
            margin-right: 4px;

            input {
                position: absolute;
                opacity: 0;
            }
        }
        .switch {
            display: inline-block;
            font-size: 20px;
            height: 20px;
            width: 40px;
            background: #D7DCDF;
            border-radius: 1em;
            position: relative;
            top: 6px;
            border: 1px solid #CCC;
        }

        .switch {
            .handle {
                height: 1em;
                width: 1em;
                border-radius: 1em;
                background: #2C3E50;
                -webkit-transition: all 200ms;
                -moz-transition: all 200ms;
                transition: all 200ms;
                position: relative;
                top: -1px;
            }
        }

        .switch input:checked + .handle {
            -webkit-transform: translate3d(100%, 0, 0);
            -moz-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
            background: #1ABC9C;
            // box-shadow: 0 0 0 2px #FFF, 0 0 0 3px #1ABC9C;
        }
    }
</style>

<label>{name}</label>
<div class="switchWrapper">
    <div class="falsetext">{falseOption}</div>
    <label class="switch">
        <input type="checkbox" bind:checked={checkValue} checked="{checkValue}" on:change={() => validateInput(checkValue)} />
        <div class="handle"></div>
    </label>
    <div class="truetext">{trueOption}</div>
</div>