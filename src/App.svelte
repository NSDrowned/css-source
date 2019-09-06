<script>
	import Result from './components/result/result.svelte';
	import Tabs from './components/tabs/tabs.svelte';
	import Textarea from './components/textarea/textarea.svelte';
</script>

<style lang="scss">
	.container {
		max-width: 965px;
		margin-left: auto;
		margin-right: auto;
	}
	h1 {
		color: purple;
	}	
</style>


<div class="container">
	<div class="row">
		<div class="col-12">
			<h1>Form Element Generator</h1>
		</div>
	</div>
    <div class="row">
        <div class="col-6">
			<Tabs />		
		</div>

		<div class="col-6">
			<Result />
			<Textarea />
		</div>
	</div>
</div>

