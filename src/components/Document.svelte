<script>
  import Icon_document from '../assets/icon_document.svelte'
  import Icon_more from '../assets/icon_more.svelte'
  import Icon_trash from '../assets/icon_trash.svelte'
  import Icon_share from '../assets/icon_share.svelte'
  import Icon_close from '../assets/icon_close.svelte'

  export let document

  let open = false

  const options = () => {
    open = !open
  }
</script>

<div class="document">
  {#if open}
    <div class="delete">
      <Icon_trash /> <span>Apagar</span>
    </div>
    <div class="share">
      <Icon_share /> <span>Compartilhar</span>
    </div>
    <div on:click={options} class="close">
      <Icon_close />
    </div>
  {:else}
    <div class="item">
      <Icon_document />
      <span class="title">{document.title}</span>
    </div>
    <div on:click={options} class="more">
      <Icon_more />
    </div>
  {/if}
</div>

<style>
  .document{
    flex: 1;
    position: relative;
    width: 100%;
    height: 3rem;
    margin: 3px 0;
    border-radius: 3px;
    overflow: hidden;
    text-align: left;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255,255,255,.2);
  }
  .item, .more{
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 3px;
    height: 100%;
    cursor: pointer;
  }
  .close, .more{
    width: 3rem;
    justify-content: center;
  }
  .item{
    flex: 1;
  }
  .item span{
    margin-left: 5px;
  }
  .item:hover, .more:hover, .delete:hover, .share:hover, .close:hover {
    background: rgba(255,255,255,.4);
  }
  .delete, .share, .close{
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 3px;
    height: 100%;
    cursor: pointer;
  }
  .delete span, .share span{
    margin-left: 5px;
  }
</style>