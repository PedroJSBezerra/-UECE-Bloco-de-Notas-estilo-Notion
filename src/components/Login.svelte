<script>
  let Button = 'assets/button_login.png'
	import {auth, googleProvider} from '../firebase'

  const login = () => {
		auth.signInWithPopup(googleProvider)
    // usa a resposta do loging se precisar
    // .then((result) => {
		// 	user = {
		// 		uuid: result.user.uid,
		// 		photo: result.user.photoURL
		// 	}
		// })
	}

</script>

<div class="login">
  <h3>Externapp</h3>
  <p>Cadastro com foco em geolocalização.</p>
  <p>Com o Externapp voçê obtêm as coodenadas geograficas do dispositivo.</p>
  <p>Que tal cadastrar um cliente e nunca mais precisar decorar seu endereço?</p>
  <p>Para começar faça o login.</p>
  <input on:click={login} class="loginbutton" type="image" src="{Button}" alt="Login com Google">
</div>

<style>
  .login{
    height: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
  .login > *{
    margin-top: 1rem;
  }
</style>