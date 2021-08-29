<script>
  import Sidenav from "./Sidenav.svelte"
  import Profile from './Profile.svelte'
  import Icon_search from '../assets/icon_search.svelte'

</script>

<nav class="nav">
  <Sidenav />
  <Profile />
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
    grid-area: nav;
  }
  .search{
    display: flex;
    align-items: center;
  }
</style>