<script>
	
	import Nav from './components/Nav.svelte'
	import Documents from './components/Documents.svelte'
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
		<Documents />
	{:else if loged === false}
		<Login />
	{:else}
		<Loading />
	{/if}
</div>

<style>
	.app{
		height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr;
		grid-template-areas: 
		'nav';
	}

</style>
