<script>
  import Button_more from "./Button_more.svelte"

  import Icon_document from "../assets/icon_document.svelte";
  import Icon_trash from "../assets/icon_trash.svelte";
  import Icon_share from "../assets/icon_share.svelte";
  
  import {slide} from 'svelte/transition'

  export let document;
  export let open = false;
</script>

<div class="document">
    
    <div class="item">
      <div class="icon"><Icon_document /></div>
      <span class="title">{document.title}</span>
    </div>

    <Button_more {open} on:click={() => (open = !open)} />

    {#if open}
      <div class="options" transition:slide={{duration:250}}>
        <div class="delete">
          <div class="icon"><Icon_trash /></div>
          <span>Apagar</span>
        </div>
        <div class="share">
          <div class="icon"><Icon_share /></div>
          <span>Compartilhar</span>
        </div>
      </div>
    {/if}
    
</div>

<style>
  .document {
    border-radius: 4px;
    margin: 6px 0;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    background:rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  .options{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
  }
  .icon {
    margin: .6rem;
    display: flex;
    align-items: center;
  }
  .options::before{
    content: '';
    position: absolute;
    width: 95%;
    height: 2px;
    background: rgba(255, 255, 255, 0.4);
  }
  span{
    margin: auto 0;
  }
  .item,
  .delete,
  .share{
    flex: 1;
    display: flex;
  }
  :where(.item, .delete, .share):hover {
    background: rgba(255, 255, 255, 0.1);
  }
</style>
