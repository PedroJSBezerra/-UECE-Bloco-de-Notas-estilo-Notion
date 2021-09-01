<script>
  import Icon_document from "../assets/icon_document.svelte";
  import Icon_more from "../assets/icon_more.svelte";
  import Icon_trash from "../assets/icon_trash.svelte";
  import Icon_share from "../assets/icon_share.svelte";
  import Icon_close from "../assets/icon_close.svelte";
  import { fade } from "svelte/transition";

  export let document;

  let open = false;
</script>

<div class="document">
  <div class="item_overlay">
    {#if open}
      <div class="options">
        <div class="delete">
          <div class="icon"><Icon_trash /></div>
          <span>Apagar</span>
        </div>
        <div class="share">
          <div class="icon"><Icon_share /></div>
          <span>Compartilhar</span>
        </div>
      </div>
    {:else}
      <div class="item">
        <div class="icon"><Icon_document /></div>
        <span class="title">{document.title}</span>
      </div>
    {/if}
  </div>
  <div on:click={() => (open = !open)} class="toggle">
    {#if open}
      <div class="icon"><Icon_close /></div>
    {:else}
      <div class="icon"><Icon_more /></div>
    {/if}
  </div>
</div>

<style>
  .document {
    border-radius: 4px;
    margin: 6px 0;
    display: flex;
    background: rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }
  .item_overlay {
    flex: 1;
    display: flex;
  }
  .title {
    flex: 1;
  }
  .options{
    flex-wrap: wrap;
  }
  .toggle {
    display: flex;
    align-items: center;
    background: #555;
  }
  .icon {
    margin: .6rem;
    display: flex;
    align-items: center;
  }
  span{
    margin: auto .6rem;
  }
  .item,
  .options,
  .delete,
  .share{
    flex: 1;
    display: flex;
    align-items: center;
  }
  :where(.item, .toggle, .delete, .share):hover {
    background: rgba(255, 255, 255, 0.1);
  }
</style>
