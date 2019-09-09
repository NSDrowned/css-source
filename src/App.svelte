<script>
	import Navbar from './components/navigation/navbar/navbar.svelte';
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
		color: #1abc9c;
		margin: 0;
	}	
</style>

<Navbar />
<div class="container">
	<div class="row">
		<div class="col-12">
			<h1>Form Input Element Styler</h1>
			<div>Style your form input elements, including success, error and disabled states.</div>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<Result />
		</div>
	</div>
    <div class="row">
        <div class="col-7">
			<Tabs />		
		</div>
		<div class="col-5">
			<Textarea />
			<h4>Generated HTML:</h4>
			<textarea></textarea>
		</div>
	</div>
</div>

