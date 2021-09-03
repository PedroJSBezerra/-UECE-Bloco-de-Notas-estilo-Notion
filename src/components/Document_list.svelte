<script>
  import Icon_add from '../assets/icon_document_add.svelte'
  import Document from './Document.svelte'
  import {list, add} from './stores'

</script>

<div class="scroll_area">
  <div class="add" on:click="{add}">
    <div class="icon"><Icon_add /></div>
    <span>Clique para adicionar</span>
  </div>
  {#each list as document}
    <Document {document}/>
  {/each}
</div>

<style>
  .scroll_area{
    height: 95vh;
    padding: 0 20px;
    overflow-y: auto;
  }
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