<script>
  import Burguer from './Burguer.svelte'
  import Profile from './Profile.svelte'

  let open = false
</script>

<div class="nav">
  <h3 class="title">First text note</h3>
  <Burguer on:click="{() => open = !open}"/>
  {#if open}
    <div class="leftpanel open">
      <Profile />
    </div>
  {:else}
    <div class="leftpanel">
      <Profile />
    </div>
  {/if}
</div>

<style>
  .nav{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2%;
    margin-bottom: 2%;
  }
  .title{
    flex: 1;
  }
  .nav:after{
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: rgba(255,255,255,.2);
  }
  .leftpanel{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 80vw;
    position: fixed;
    inset: 0 0;
    background: #555;
    z-index: 1;
    transform: translateX(-100%);
  }
  .open{
    transform: translateX(0);
  }
</style>