<script>
  import { auth } from "../firebase";
  import Icon_power from '../assets/icon_power.svelte'
  import { slide } from 'svelte/transition'
  let user = auth.currentUser

  const srcError = (error) => {
    console.log(error)
  }

</script>

<div class="side" transition:slide={{duration:300}}>
  <div class="profile">
    <img 
      on:error={srcError}
      src="{user.photoURL}" 
      alt="Imagem de perfil" 
      referrerpolicy="no-referrer"
    >
    <h3>{user.displayName}</h3>
  </div>
  <div class="settings">
    <div on:click="{() => auth.signOut()}" class="logout">
      <div class="icon">
        <Icon_power />
      </div>
      <span>Logout</span>
    </div>
  </div>
</div>

<style>
  .side{
    position: absolute;
    background: #555;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile img{
    border-radius: 50%;
    margin: 50px 0 20px;
    width: 100px;
    height: 100px;
  }
  .settings{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
  }
  .logout{
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
    background: rgba(255,255,255,.1);
  }
  .logout:hover{
    background: rgba(255,255,255,.2);
  }
  .icon{
    margin: 0 8px 0 0;
  }
</style>