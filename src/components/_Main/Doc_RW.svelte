<script>
  import Icon_checked from '../../assets/Icon_checked.svelte'
  import {currentDoc, updateDocument} from '../../lib/functions'
  
</script>

<div class="currentdoc">
  {#if $currentDoc.id != ''}
    <div class="save" on:click="{() => updateDocument($currentDoc.id, $currentDoc.data)}">
      <div class="icon"><Icon_checked /></div>
    </div>
    <h3 contenteditable="true" bind:innerHTML="{$currentDoc.data.title}"></h3>
    <p contenteditable="true" bind:innerHTML="{$currentDoc.data.data}"></p>
  {:else}
    <h3>Escolha um documento no menu.</h3>
  {/if}
</div>

<style>
  .currentdoc{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0;
    position: fixed;
    top: 0;
  }
  .save{
    display: flex;
    justify-content: flex-end;
  }
  h3{
    margin-top: 2rem;
  }
  p{
    margin-top: 2rem;
  }
</style>