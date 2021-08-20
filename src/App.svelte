<script>
	import {loged} from './components/stores/Auth'
	import Home from "./components/routes/Home.svelte";
	import Login from './components/routes/Login.svelte'

	console.log('loged: '+$loged)
</script>

<div class="app">
	{#if $loged}
		<Home />
	{:else}
		<Login/>
	{/if}
</div>

<style>
</style>
