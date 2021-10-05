<script>
  import { fly } from 'svelte/transition'
  import Icon_trash from '../../assets/icon_trash.svelte'

  export let doc
  export let index
  
</script>

<div on:click="{console.log(doc, index)}" in:fly={{x: 40, duration: 250}} class="options">
  <div class="icon"><Icon_trash /></div>
  <h3>apagar</h3>
</div>

<style>

  .options{
    display: flex;
    position: absolute;
    width: calc(100% - 40px);
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