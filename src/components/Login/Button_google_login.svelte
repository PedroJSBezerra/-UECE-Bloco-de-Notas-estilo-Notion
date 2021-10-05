<script>
	import Icon_google_login from './Icon_google_button.svelte'
	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

	const login = () => {
		const auth = getAuth()
		const provider = new GoogleAuthProvider()

		signInWithPopup(auth, provider)
			.then((result) => {
				console.log("Loged-in with user: "+ result.user.displayName)
			}).catch((error) => {
				const errorMessage = error.message
				console.log(errorMessage)
			})
	}

</script>

<button on:click="{login}">
	<Icon_google_login />
	<span>Login com google</span>
</button>

<style>
	button{
		display: flex;
		align-items: center;
		justify-content: center;

    border-radius: 5px;
	}
	span{
		padding:10px;
		font-weight: 600;
	}
</style>