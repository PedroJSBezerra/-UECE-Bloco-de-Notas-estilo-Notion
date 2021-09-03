<script>
  import Button_burguer from './Button_burguer.svelte'
  import Overlay_side from './Overlay_side.svelte'

  let open = false
</script>

<nav class="nav">
  <Button_burguer {open} on:click="{() => open = !open}"/>
  {#if open}
    <Overlay_side />
  {/if}
</nav>
<style>
  .nav{
    background: #555;
    display: flex;
    align-items: center;
  }
</style>