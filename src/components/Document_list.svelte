<script>
  import Document from './Document.svelte'

  let list = [
    {title: 'Document 1'},
    {title: 'Document 2'},
    {title: 'Document 3'},
    {title: 'Document 4'},
    {title: 'Document 5'},
    {title: 'Document 6'},
]
</script>

<div class="scroll_area">
  {#each list as document}
    <Document {document}/>
  {/each}
  <div class="add"></div>
</div>

<style>
  .scroll_area{
    height: 95vh;
    padding: 0 20px;
    overflow-y: auto;
  }
</style>