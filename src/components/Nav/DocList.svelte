<script>
  import AddDoc from './AddDoc.svelte'
  import Document from './Document.svelte'
  import { docList, getDocs } from '../../lib/functions'
  getDocs()
  export let w
</script>

<div class="documents">
  <ul>
    {#each $docList as doc, index}
      <Document {w} {doc} {index}/>
    {/each}
  </ul>
  <AddDoc />
</div>

<style>
  .documents{
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
  }
  ul{
    list-style-type: none;
    padding-top: 1rem;
    /* height: 100%; */
    overflow-y: auto;
  }
</style>