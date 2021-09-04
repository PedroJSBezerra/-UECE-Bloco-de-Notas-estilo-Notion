<script>
  import Button_add_document from "./Button_add_document.svelte"
  import Document from './Document.svelte'
  import {list, add} from './stores'

</script>

<div class="scroll_area">
  <Button_add_document on:click="{add}" />
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
</style>