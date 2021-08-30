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

<button class="{open? 'document options': 'document'}">
  <Icon_document />
  <span class="title">{document.title}</span>
  <Icon_more on:click={options}/>
  <div class="opt">
    <div class="delete">
      <Icon_trash />
      <span>Apagar</span>
    </div>
    <div class="share">
      <Icon_share />
      <span>Compartilhar</span>
    </div>
    <div class="close">
      <Icon_close on:click={options} ref="close" />
    </div>
  </div>
</button>

<style>
  .document{
    position: relative;
    width: 100%;
    margin: 3px 0;
    padding: 10px;
    border-radius: 3px;
    background: rgba(255,255,255,.2);
    display: flex;
    align-items: center;
    overflow: hidden;
    border: none;
    text-align: left;
    color: inherit;
  }
  .document:hover{
    background: rgba(255,255,255,.4);
  }
  .title{
    flex: 1;
    margin: 0 10px;
  }
  .opt{
    display: none;
  }
  .document.options .opt{
    position: absolute;
    background: #666;
    padding: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delete, .share{
    display: flex;
    align-items: center;
  }
  .delete, .share, span{
    margin-left: 10px;
  }
</style>