<script>
  import Nav from '../Nav/_index.svelte'
  import Doc_RW from './Doc_RW.svelte'
  import { open } from '../../lib/functions'

  let w

  $: if(w > 700){
    open.set(true)
  }

</script>

<svelte:window bind:innerWidth="{w}"/>

<div class="main{w > 700? ' desktop':''}">
  <Nav {w}/>
  <Doc_RW {w}/>
</div>

<style>
  .main{
    width: 100%;
    height: 100%;
  }
  .desktop{
    display: flex;
  }
</style>