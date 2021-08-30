<script>
	
	import Nav from './components/Nav.svelte'
	import Document_list from './components/Document_list.svelte'
	import Login from './components/Login.svelte'
  import Loading from './components/Loading.svelte';
	import { auth } from './firebase'

	let loged

	auth.onAuthStateChanged((result) => {
	if(result){
			loged = true
			console.log('Observer: User signed in.')
		}else{
			loged = false
			console.log('Observer: No user signed in.')
		}
	})


</script>
<!-- svelte:head Insere uma head personalizada no documento -->
<svelte:head>
	<meta name="theme-color" content="#333">
</svelte:head>
<div class="app">
	{#if loged === true}
		<Nav />
		<Document_list />
	{:else if loged === false}
		<Login />
	{:else}
		<Loading />
	{/if}
</div>

<style>
	.app{
		position: fixed;
		height: 100vh;
		width: 100vw;
	}
</style>
