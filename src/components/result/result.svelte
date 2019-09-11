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
    let cssClass;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // object to css rules

    function jstocss(object) {
        var tempString = '';
        var pseudoString = '';
        for (var objectKey in object) {
            switch (objectKey) {
                case 'fontSize':
                    tempString += '\t' + objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + object[objectKey] + styleValues.fontSizeUnit + ";\n";
                break;
                case 'borderRadius':
                    tempString += '\t' + objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + object[objectKey] + styleValues.borderRadiusUnit + ";\n";
                break;
                case 'borderWidth':
                    tempString += '\t' + objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + object[objectKey] + "px;\n";
                break;                
                case 'borderColor':
                    tempString += '\t' + objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + object[objectKey] + ";\n";
                break;                                       
                case 'outline':
                    if(object[objectKey]) {
                        tempString += '\toutline: none;\n';
                    }
                break;
                case 'boxSizing':
                    if(object[objectKey]) {
                        tempString += '\tbox-sizing: border-box;\n';
                    }
                break;
                
                // pseudo

                case 'placeHolderColor':
                    if(object[objectKey]) {
                        pseudoString += '#sampleWrapper input::placeholder {\n\tcolor: ' + object[objectKey] + ';\n}\n';
                        pseudoString += '#sampleWrapper input:-ms-input-placeholder {\n\tcolor: ' + object[objectKey] + ';\n}\n';
                        pseudoString += '#sampleWrapper input::-ms-input-placeholder {\n\tcolor: ' + object[objectKey] + ';\n}\n';
                    }
                break;                      
            }
        }

        updateHTMLStyle(tempString, pseudoString);

        return tempString;
    }

    // stored style values

    const valuesSubscription = InputValues.subscribe(storedValues => {

        styleValues.fontSize = storedValues.fontSize;
        styleValues.fontSizeUnit = storedValues.fontSizeUnit;
        styleValues.borderRadius = storedValues.borderRadius;
        styleValues.borderRadiusUnit = storedValues.borderRadiusUnit;
        styleValues.borderWidth = storedValues.borderWidth;
        styleValues.borderColor = storedValues.borderColor;
        styleValues.placeHolderColor = storedValues.placeHolderColor;
        styleValues.outline = storedValues.outline;
        styleValues.boxSizing = storedValues.boxSizing;

        GeneratedCss.update(storedCss => {
            return { generatedCss : jstocss(styleValues) };
        });
    });

    // // stored generated css

    // let css;

    // const cssSubscription = GeneratedCss.subscribe(storedCss => {
    //     css = storedCss.generatedCss;       
    // });

    function updateHTMLStyle(maincss, pseudocss) {
        let sheet = document.getElementById('sampleStyle');
        sheet.innerHTML = `#sampleWrapper input[type="text"] {\n${maincss}}\n`;
        sheet.innerHTML += pseudocss;
    }

</script>

<style lang="scss">
    .wrapper {
        background-position: center center;
        padding: 20px;
        overflow: visible;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2) inset;
        margin-top: 14px;
        position: relative;
        height: 150px;
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
        top: 14px;
        right: 14px;
        width: 125px;
        height: 36px;
        background-color: #F6F6F6;
        border-radius: 4px;
        padding-left: 85px;
        padding-top: 6px;
    }
    .backColor-picker__wrapper:before {
        content: 'Background';
        position: absolute;
        right: 48px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        margin-top: 0px;
        transform: translateY(-50%);
        font-size: 11px;
        font-weight: bold;
    }

</style>

<div id="sampleWrapper" class="wrapper" style="background-color: {backColor}">
    <div class="backColor-picker__wrapper">
        <div class="backColor-picker"></div>
    </div>
    <input type="text" placeholder="Testing...">
</div>