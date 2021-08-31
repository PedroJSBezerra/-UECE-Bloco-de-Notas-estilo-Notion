<script>
  import Icon_document from '../assets/icon_document.svelte'
  import Icon_more from '../assets/icon_more.svelte'
  import Icon_trash from '../assets/icon_trash.svelte'
  import Icon_share from '../assets/icon_share.svelte'
  import Icon_close from '../assets/icon_close.svelte'
  import { fade } from 'svelte/transition'

  export let document

  let open = false

  const options = () => {
    open = !open
  }
</script>

<div class="document">
  <div class="item_overlay">
    {#if open}
      <div class="options">
        <div class="icon"><Icon_trash /></div>
        <div class="icon"><Icon_share /></div>
      </div>
    {:else}
      <div class="item">
        <div class="icon"><Icon_document /></div>
        <span class="title">{document.title}</span>
      </div>
    {/if}
  </div>
  <div on:click="{options}" class="toggle">
    {#if open}
      <div class="icon"><Icon_close /></div>
    {:else}
      <div class="icon"><Icon_more /></div>
    {/if}
  </div>
</div>

<style>
  .document{
    border-radius: 4px;
    margin: 6px 0;
    display: flex;
    background: rgba(255,255,255,.2);
  }
  .icon{
    margin: .6rem .6rem;
    display: flex;
    align-items: center;
  }
  .item_overlay{
    flex: 1;
    display: flex;
  }
  .item, .options{
    flex: 1;
    display: flex;
    align-items: center;
  }
  .title{
    flex: 1;
  }
  :where(.item, .toggle, .options):hover{
    background: rgba(255,255,255,.1);
  }
</style>