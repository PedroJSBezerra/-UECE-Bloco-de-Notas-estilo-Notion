<script>
  import Nav from './components/Nav.svelte'
	import Home from "./components/Home.svelte";
	import Login from './components/Login.svelte'
	import {user} from './stores'

	let user_loged
	
	const unsubscribe = user.subscribe(value => {
		user_loged = value
	})

	console.log(user_loged)
</script>

<div class="app">
	{#if user_loged}
		<Nav />
		<Home />
	{:else}
		<Login />
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
