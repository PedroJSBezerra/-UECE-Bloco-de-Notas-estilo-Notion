<script>
  import { auth } from "../firebase";

  let user = auth.currentUser;

  let profile = 'profile'

</script>

<div class="{profile}">
  <input 
    class="userimg"
    type="image"
    src={user.photoURL}
    alt="Foto do usuário"
    referrerpolicy="no-referrer"
    async
    on:click="{() => profile = profile === 'profile' ? 'profile open':'profile'}"
  />
  <h4 
    class="username">{user.displayName}
  </h4>
  <input
    class="logout"
    type="image" 
    src="assets/icon_power.svg" 
    alt="Logout" 
    on:click="{() => auth.signOut()}"
  />
  <input
    class="close"
    type="image" 
    src="assets/icon_close.svg"
    alt="fechar perfil"
    on:click="{() => profile = 'profile'}"
  />
</div>

<style>
  .profile {
    display: flex;
  }
  .userimg {
    width: 45px;
    border-radius: 50%;
  }
  .profile .username,.logout,.close {
    display: none;
  }
  /* ==== PROFILE OPEN ==== */
  .profile.open{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0px;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background: #444;
    padding: 15%;
  }
  .profile.open> *{
    margin-top: 1rem;
  }
  .profile.open .logout,
  .profile.open .close,
  .profile.open .username{
    display: block;
  }
  .profile.open .userimg{
    width: 50%;
  }
  .profile.open .logout{
    width: 40px;
    border-radius: 50%;
    padding: 2px;
    background: rgba(255,255,255,.2);
    box-shadow: 1px 1px 15px -7px;
  }
  .profile.open .logout:hover{
    background: rgb(239 155 155);
  }
  .profile.open .close{
    position: fixed;
    top: 0;
    left: 0;
    margin-left: 1rem;
  }
</style>
