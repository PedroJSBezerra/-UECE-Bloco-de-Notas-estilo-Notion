<script>
  import { getAuth } from 'firebase/auth'
  let userName = getAuth().currentUser.displayName
  import Nav from '../Nav/_index.svelte'
</script>

<div class="main">
  <Nav />
  <div class="welcome">
  </div>
</div>

<style>
  .main{
    width: 100%;
    height: 100%;
  }
</style>