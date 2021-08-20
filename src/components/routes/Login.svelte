<script>
	import {loged} from '../stores/Auth'
  let src = 'assets/btn_google_signin_dark_normal_web.png'

  let login = () => {
    loged.update(
      loged => !loged ? true : false
    )
    console.log('loged: '+$loged)
  }
</script>

<div class="login">
  <button on:click={login}>
    <img {src} alt="Login with Google" />
  </button>
</div>

<style>
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login button {
    background: none;
    width: 189px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
