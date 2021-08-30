<script>
  import { auth } from "../firebase";
  import { open } from './stores'
  import Sidenav from "./Sidenav.svelte"
  import Icon_search from '../assets/icon_search.svelte'
  import Icon_account from '../assets/icon_account.svelte'

</script>

<nav class="nav">
  <Sidenav />
  <Icon_account on:click="{() => open.update(open => !open)}"/>
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
  .search{
    display: flex;
    align-items: center;
  }
</style>