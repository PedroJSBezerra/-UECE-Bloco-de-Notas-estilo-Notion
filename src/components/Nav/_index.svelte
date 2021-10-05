<script>
  import Button from './Button.svelte'
  import Profile from './Profile.svelte'
  import Documents from '../Documents/_index.svelte'
  import { fly } from 'svelte/transition'

  let open = false
</script>

<Button open={open} on:click={() => open = !open} />
  
{#if open}
  <div
   class="nav"
   in:fly={{x: -200}}
   out:fly={{x: -200}}
  >
  <Profile open={open} />
  <Documents />
  </div>
{/if}

<style>
  .nav{
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.1);
    overflow: hidden;
  }
</style>