<script>
  import Icon_document_add from '../../assets/icon_document_add.svelte'
  import { addDocument } from '../../lib/functions'

</script>
<h3 on:click="{() => addDocument()}">
  <div class="icon"><Icon_document_add /></div>
  <span>Adicionar Documento</span>
</h3>
<style>
  h3{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.05);
    border-radius: 6px;
    width: 255px;
    margin: 30px auto;
    cursor: pointer;
  }
  h3:hover{
    background: rgba(255,255,255,.1);
  }
  h3 > *{
    padding: 6px;
  }
</style>