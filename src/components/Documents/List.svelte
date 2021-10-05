<script>
  import Document from './Document.svelte'
  let docList = [
    {
      title: "Documento 1",
    },
    {
      title: "Documento 2",
    },
    {
      title: "Documento 3",
    },
  ]
</script>
<ul>
  {#each docList as doc, index}
    <Document {doc} {index}/>
  {/each}
</ul>

<style>
  ul{
    list-style-type: none;
    margin-top: 1rem;
  }
  /* ul:first-child{
    box-shadow: 0 -1px rgba(255,255,255,.1);
  } */
</style>