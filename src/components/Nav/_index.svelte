<script>
  import Button from './Button.svelte'
  import Profile from './Profile.svelte'
  import DocList from './DocList.svelte'
  import { fly } from 'svelte/transition'
  import { open } from '../../lib/functions'

  export let w
</script>

{#if w < 700}
  <Button on:click={() => open.set(!$open)} />
{/if}
  
{#if $open}
  <div
   class="nav{w > 700? ' desktop':''}"
   in:fly={{x: -200}}
   out:fly={{x: -200}}
  >
  <Profile />
  <DocList {w}/>
  </div>
{/if}

<style>
  .nav{
    z-index: 998;
    width: 100%;
    height: 100%;
    background: #555;
    overflow: hidden;
    position: relative;
  }
  .desktop{
    width: 35%;
  }
</style>