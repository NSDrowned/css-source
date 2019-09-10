<script>
    import { onMount } from 'svelte';
    import Pickr from '@simonwep/pickr';

    onMount(async () => {
        const pickr = Pickr.create({
            el: '.backColor-picker',
            theme: 'nano', // or 'monolith', or 'nano',
            closeOnScroll: false,
            default: '#A9A9A9',
            defaultRepresentation: 'HEX',
            lockOpacity: true,
            swatches: [
                'rgba(255, 255, 255, 1)',
                'rgba(75, 75, 75, 1)',
                'rgba(125, 125, 125, 1)',
                'rgba(175, 175, 175, 1)',
                'rgba(0, 0, 0, 1)'
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
                    clear: false,
                    save: false
                }
            },
            strings: {
                save: 'Set'
            }
        });

        pickr.on('change', instance => {
            backColor = instance.toHEXA().toString();
        });

        pickr.on('hide', instance => {
            pickr.applyColor();
        });        

    });

    // stores
    import { get } from 'svelte/store';
    import InputValues from '../../stores/inputValues';
    import GeneratedCss from '../../stores/generatedCss';

    let backColor = '#A9A9A9';
    let styleValues = get(InputValues);
    let cssString = '';

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // object to css rules

    function jstocss(object) {
        var tempString = '';
        for (var objectKey in object) {
            switch (objectKey) {
                case 'borderRadius':
                    tempString += objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + object[objectKey] + "px;\n";
                break;
                case 'borderWidth':
                    tempString += objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + object[objectKey] + "px;\n";
                break;                
                case 'borderColor':
                    tempString += objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + object[objectKey] + ";\n";
                break;                   
                case 'outline':
                    if(object[objectKey]) {
                        tempString += 'outline: none;\n';
                    }
                break;
                case 'boxSizing':
                    if(object[objectKey]) {
                        tempString += 'box-sizing: border-box;\n';
                    }
                break;                           
            }
        }
        return tempString;
    }

    // stored style values

    const valuesSubscription = InputValues.subscribe(storedValues => {

        styleValues.borderRadius = storedValues.borderRadius;
        styleValues.borderWidth = storedValues.borderWidth;
        styleValues.borderColor = storedValues.borderColor;
        styleValues.outline = storedValues.outline;
        styleValues.boxSizing = storedValues.boxSizing;

        GeneratedCss.update(storedCss => {
            return { generatedCss : jstocss(styleValues) };
        });
    });

    // stored generated css

    let css;

    const cssSubscription = GeneratedCss.subscribe(storedCss => {
        css = storedCss.generatedCss;
    });

</script>

<style lang="scss">
    .wrapper {
        background-position: center center;
        padding: 20px;
        margin-bottom: 24px;
        overflow: visible;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2) inset;
        border-radius: 5px; 
        margin-top: 14px;
        position: relative;
        height: 100px;
    }
    h4 {
        margin-top: 0;
    }
    input {
        display: block;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .backColor-picker__wrapper {
        position: absolute;
        top: -34px;
        right: 0px;
        width: auto;
    }
    .backColor-picker__wrapper:before {
        content: 'Sample background color:';
        position: absolute;
        left: -132px;
        top: 5px;
        font-size: 11px;
    }

</style>

<div class="wrapper" style="background-color: {backColor}">
    <div class="backColor-picker__wrapper">
        <div class="backColor-picker"></div>
    </div>
    <input type="text" placeholder="Testing..." style={css}>
</div>