<script>
	import './lib/firebase'
	import Login from './components/Login/_index.svelte'
	import Main from './components/_Main/_index.svelte'
	import { onAuthStateChanged, getAuth  } from 'firebase/auth'

	let loged = 'loading'

	onAuthStateChanged(getAuth(), (user) => {
		if(user){
			console.log('Observer: signed in '+ user.displayName)
			loged = 'loged'
		}else{
			console.log('Observer: not signed.')
			loged = 'logedOut'
		}
	})

</script>

<div class="app">
	{#if loged == 'loged'}
		<Main />
	{:else if loged == 'logedOut'}
		<Login />
	{:else if loged == 'loading'}
		<h1 class="loading">Loading user data...</h1>
	{/if}
</div>

<style>
	.app{
		width: 100vw;
		height: 100vh;
	}
	.loading{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	}
</style>