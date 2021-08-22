<script>
	import {loged} from './components/stores/Auth'
  import Nav from './components/routes/Nav.svelte'
	import Home from "./components/routes/Home.svelte";
	import Login from './components/routes/Login.svelte'

	console.log('loged: '+$loged)
</script>

<div class="app">
	<Nav />
	{#if $loged}
		<Home />
	{:else}
		<Login/>
	{/if}
</div>

<style>
	.app{
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}
</style>
