<script>

    import InputValues from '../../../stores/inputValues.js';

    export let firstOption;
    export let secondOption;
    export let valueName;
    export let checkValue;

    let rangeValue = 0;

    function validateInput(value) {
        InputValues.update(storedValues => {
            let switchValue = value ? secondOption : firstOption;
            return { ...storedValues, [valueName] : switchValue };
        });
    }    
</script>

<style lang="scss">
    .wrapper {
        border: 1px solid #CCC;
        background-color: #F6F6F6;
        border-radius: 8px;
        display: inline-block;
        margin-left: 8px;
        padding: 5px;
        padding-left: 8px;
        padding-right: 8px;
        font-size: 12px;
        line-height: 30px;
        height: 30px;
        line-height: 6px;
        position: relative;
        top: 1px;

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
            font-size: 14px;
            height: 14px;
            width: 28px;
            top: 2px;
            background: #D7DCDF;
            border-radius: 1em;
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
            // background: #1ABC9C;
        }
    }
</style>

<div class="wrapper">
    <span>{firstOption}</span>
    <label class="switch">
        <input type="checkbox" bind:checked={checkValue} checked="{checkValue}" on:change={() => validateInput(checkValue)} />
        <div class="handle"></div>
    </label>
    <span>{secondOption}</span>
</div>