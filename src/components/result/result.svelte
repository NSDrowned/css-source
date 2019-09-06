<script>
	// stores
    import InputValues from '../../stores/inputValues.js';
    
    let generatedStyle = {
        borderRadius: 0
    }

    let borderRadius;
    let borderWidth;
	
	const subscription = InputValues.subscribe(storedValues => {
        generatedStyle.borderRadius = storedValues.borderRadius;
        borderWidth = storedValues.borderWidth;

        console.log(generatedStyle);
    });

    

</script>

<style>
    .wrapper {
        background-color: darkgray;
        padding: 20px;
        margin-bottom: 24px;
        overflow: hidden;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2) inset;
        border-radius: 5px; 
        margin-top: 14px;
    }
    h4 {
        margin-top: 0;
    }
    input {
        
    }

</style>

<h4>Result:</h4>
<div class="wrapper">
    <input type="text" placeholder="Testing..." style="{generatedStyle}">
</div>