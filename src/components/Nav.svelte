<script>
  import Profile from './Profile.svelte'
  import Icon_search from '../assets/icon_search.svelte'
</script>

<nav class="nav">
  <Profile />
  <div class="search">
    <input type="text">
    <Icon_search />
  </div>
</nav>
<style>
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    background: rgba(255,255,255,.2);
  }
  .search{
    display: flex;
    align-items: center;
  }
</style>