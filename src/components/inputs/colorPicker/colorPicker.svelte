<script>
    import { onMount } from 'svelte';
    import InputValues from '../../../stores/inputValues.js';
    import Pickr from '@simonwep/pickr';

    export let name;
    export let valueName;
    let pickr;
    let hexvalue = '#666';

    onMount(async () => {
        pickr = Pickr.create({
            el: '.color-picker',
            theme: 'nano', // or 'monolith', or 'nano',
            closeOnScroll: false,
            defaultRepresentation: 'HEX',
            comparison: false,
            default: '#666',
            lockOpacity: false,
            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],

            components: {

                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: false,
                    hsva: false,
                    cmyk: false,
                    input: true,
                    clear: true,
                    save: true
                }
            },
            strings: {
                save: 'Set'
            }
        });

        pickr.on('save', instance => {
            if(instance) {
                InputValues.update(storedValues => {
                    hexvalue = instance.toHEXA().toString();
                    return { ...storedValues, [valueName] : instance.toHEXA().toString() }
                });
            } else {
                InputValues.update(storedValues => {
                    hexvalue = 'None';
                    return { ...storedValues, [valueName] : null }
                });                
            }
        });     
    });

    function changeColor(event) {
        pickr.setColor(event.target.value);
    }    

</script>

<style lang="scss">
    :global(.pickr) {
        display: inline-block;
    }
    .pickerWrapper {
        border: 1px dotted #CCC;
        padding: 8px;
        padding-bottom: 0px;        
        text-align: center;
        margin-top: 8px;
        margin-bottom: 14px;

        input {
            display: inline-block;
            width: 86px;
        }
    }
</style>

<label>{name}</label>
<div class="pickerWrapper">
    <div class="color-picker"></div>
    <input type="text" on:change={changeColor} value={hexvalue}>
</div>