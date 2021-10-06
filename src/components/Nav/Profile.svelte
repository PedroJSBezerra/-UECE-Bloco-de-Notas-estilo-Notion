<script>
  import { getAuth } from 'firebase/auth'
  import { fly } from 'svelte/transition'
  import { open } from '../../lib/functions'
  
  let currentUser = getAuth().currentUser
  let userName = currentUser.displayName
  let photoUrl = currentUser.photoURL

</script>
{#key $open}
  <div 
    in:fly={{y: -100, duration: 700}} 
    class="profile"
  >
    <h3>{userName}</h3>
    <img src="{photoUrl}" alt="foto do perfil">
  </div>
{/key}

<style>
  .profile{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: rgba(255,255,255,.1);
  }
  .profile > *{
    padding: 6px;
  }
  .profile img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>