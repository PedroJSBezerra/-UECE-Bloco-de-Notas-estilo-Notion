<script>
  import Profile from './Profile.svelte'
</script>

<nav class="nav">
  <Profile />
  <div class="search">
    <input type="text">
    <img src="" alt="">
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
</style>