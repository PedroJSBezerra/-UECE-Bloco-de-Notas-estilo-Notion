<script>
	import {auth, googleProvider} from '../firebase'
  let src = 'assets/btn_google_signin_dark_normal_web.png'
  
	import {user} from '../stores'
  
  function login(){
    auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      let uuid = result.user.uid
      let photo = result.user.photoURL
      user.update({
        uuid,
        photo
      })
    })
  }

</script>

<div class="login"{user}>
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
