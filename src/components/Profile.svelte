<script>
  import { auth } from "../firebase";
  import { open } from './stores'
</script>

<div class="profile">
  <input 
    class="userimg"
    type="image"
    src={auth.currentUser.photoURL}
    alt="Foto do usuário"
    referrerpolicy="no-referrer"
    on:click="{() => open.update(open => !open)}"
  />
</div>

<style>
  .userimg {
    width: 45px;
    border-radius: 50%;
  }
</style>