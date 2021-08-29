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

{#if loged === true}
	<Nav />
	<Documents />
{:else if loged === false}
	<Login />
{:else}
	<Loading />
{/if}

<style>

</style>
