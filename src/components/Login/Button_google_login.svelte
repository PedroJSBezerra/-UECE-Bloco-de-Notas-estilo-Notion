<script>
	import Icon_google_login from './Icon_google_button.svelte'
	import {login} from '../../lib/functions'
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