<script>
	import RangeSlider from '../inputs/rangeslider/rangeslider.svelte';
	import ColorPicker from '../inputs/colorPicker/colorPicker.svelte';
	import CheckBox from '../inputs/checkbox/checkbox.svelte';
	import Switch from '../inputs/switch/switch.svelte';
</script>

<style lang="scss">
    .tabs {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.12);
    }
    .input {
        position: absolute;
        opacity: 0;
    }    
	label {
		width: 100%;
		background: #e5e5e5;
		cursor: pointer;
		font-size: 14px;
		color: #7f7f7f;
		padding: 10px;
	}
	.label:hover {
		background: #d8d8d8;
	}
	.label:active {
		background: #ccc;
	}
	.input:focus + .label {
		z-index: 1;
	}
	.input:checked + .label {
		background: #fff;
		color: #000;
	}
	@media (min-width: 600px) {
		.label {
			width: auto;
		}
	}
	.panel {
		display: none;
		padding: 24px;
		background: #fff;
		
	}
	@media (min-width: 600px) {
		.panel {
			order: 99;
		}
	}
	.input:checked + .label + .panel {
		display: block;
		width: 100%;
	}	
</style>

<div class="tabs">
    <input name="tabs" type="radio" id="tab-1" checked="checked" class="input"/>
    <label for="tab-1" class="label">Default</label>
    <div class="panel">
        <RangeSlider name="Border Width (px)" minValue="0" maxValue="100" valueName="borderWidth"/>
        <RangeSlider name="Border Radius (px)" minValue="0" maxValue="100" valueName="borderRadius" />
		<ColorPicker name="Border Color" valueName="borderColor" />
		<Switch name="Box-sizing" falseOption="Content-box (default)" trueOption="Border-box" valueName="boxSizing" />
		<Switch name="Outline" description="Removes the blue outline on focus. Don't disable if you care about accessibility." falseOption="Enabled (default)" trueOption="Disabled" valueName="outline" />		
    </div>

    <input name="tabs" type="radio" id="tab-2" class="input"/>
    <label for="tab-2" class="label">Success</label>
    <div class="panel">
        Success state
    </div>

    <input name="tabs" type="radio" id="tab-3" class="input"/>
    <label for="tab-3" class="label">Error</label>
    <div class="panel">
        Error state
    </div>

    <input name="tabs" type="radio" id="tab-4" class="input"/>
    <label for="tab-4" class="label">Disabled</label>
    <div class="panel">
        Disabled state
    </div>
</div>	