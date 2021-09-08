<script>
  import {auth, googleProvider, db} from '../firebase'
  import Button from '../assets/btn_google_dark_normal_ios.svelte'

  const login = () => {
		auth
    .signInWithPopup(googleProvider)
    .then((result) => {
		})
	}

</script>

<div class="login">
  <h3>Externapp</h3>
  <p>Cadastro com foco em geolocalização.</p>
  <p>Com o Externapp voçê obtêm as coodenadas geograficas do dispositivo.</p>
  <p>Que tal cadastrar um cliente e nunca mais precisar decorar seu endereço?</p>
  <p>Para começar faça o login.</p>
  <button on:click={login} class="loginbutton" alt="Login com Google">
    <Button />
    <span>login com Google</span>
  </button>
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
  .loginbutton{
    align-self: center;
    display: flex;
    align-items: center;
    background: #4285F4;
    color: white;
    border: none;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
  }
  .loginbutton span{
    margin: auto 5px;
  }
</style>