<script>
  import Nav from './components/Nav.svelte'
	import Home from "./components/Home.svelte";
	import Login from './components/Login.svelte'

	import { auth } from './firebase'
	
	let user = false
	console.log(user)

	//esta função dispara sempre que o estado de login muda
	auth.onAuthStateChanged(function(usr){	
		if(usr){
			console.log('user signed in: '+usr.displayName)
			user = true
		}else{
			console.log('no user signed in')
			user = false
		}
	})
	
</script>

<div class="app">
	{#if user}
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
