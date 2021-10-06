<script>
  import { fly } from 'svelte/transition'
  import Icon_trash from '../../assets/icon_trash.svelte'
  import {clickOutside, deleteDocument} from '../../lib/functions'

  export let doc
  console.log(doc)
  
</script>

<div
  use:clickOutside
  on:click_outside
  on:click="{deleteDocument(doc.id)}" 
  in:fly={{x: 30, duration: 700}} 
  class="options"
>
  <div class="icon"><Icon_trash /></div>
  <h3>apagar</h3>
</div>

<style>

  .options{
    display: flex;
    width: 100%;
    align-items: center;
    background: #5b5b5b;
    justify-content: center;
  }
  .options h3{
    width: auto;
  }
  .icon{
    padding: 4px;
  }
</style>