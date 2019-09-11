<script>
// stores
import generatedCss from '../../stores/generatedCss.js';

let css;

const subscription = generatedCss.subscribe(storedCss => {
	css = `input[type="text"] {\n${storedCss.generatedCss}}`;
});

</script>

<style>
	textarea {
		width: 100%;
		height: 200px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}
	h4 {
		margin: 0;
		margin-bottom: 16px;
	}
</style>

<h4>Generated CSS:</h4>
<textarea placeholder="Generated CSS"> {css} </textarea>