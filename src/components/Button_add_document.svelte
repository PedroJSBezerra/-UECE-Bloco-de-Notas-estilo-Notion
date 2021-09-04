<script>
  import Icon_add from '../assets/icon_document_add.svelte'
</script>
  
<div class="add" on:click>
  <div class="icon"><Icon_add /></div>
  <span>Clique para adicionar</span>
</div>

<style>
  .add{
    border-radius: 4px;
    margin: 6px 0;
    display: flex;
    border: 1px solid;
    opacity: .4;
    cursor: pointer;
  }
  .add span {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .icon {
    margin: .6rem;
    display: flex;
    align-items: center;
  }
</style>