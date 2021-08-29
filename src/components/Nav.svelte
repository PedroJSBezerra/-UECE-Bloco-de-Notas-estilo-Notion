<script>
  import { auth } from "../firebase";
  import { open } from './stores'
  import Sidenav from "./Sidenav.svelte"
  import Icon_search from '../assets/icon_search.svelte'

</script>

<nav class="nav">
  <Sidenav />
  <input 
    class="userimg"
    type="image"
    src={auth.currentUser.photoURL}
    alt="Foto do usuário"
    referrerpolicy="no-referrer"
    on:click="{() => open.update(open => !open)}"
  />
  <div class="search">
    <Icon_search />
  </div>
</nav>
<style>
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    background: rgba(255,255,255,.2);
  }
  .userimg {
    width: 45px;
    border-radius: 50%;
  }
  .search{
    display: flex;
    align-items: center;
  }
</style>