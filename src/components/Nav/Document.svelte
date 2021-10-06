<script>
  import { fly } from 'svelte/transition'
  import Icon_document from '../../assets/icon_document.svelte'
  import Icon_more from '../../assets/icon_more.svelte'
  import RemoveDoc from './RemoveDoc.svelte'
  import { open } from '../../lib/functions'
  import {currentDoc} from '../../lib/functions'

  export let doc
  export let index
  let options = false

  function showoptions(){
    options = !options
  }
  function showdoc(doc){
    currentDoc.set(doc.data)
    open.set(!$open)
  }
  
  function handleClickOutside(event){
    options = false
  }
</script>

<li in:fly={{y: 300, duration: 100*index+150}}>
  {#if options}
    <RemoveDoc on:click_outside={handleClickOutside} {doc} />
  {:else}
    <div class="icon"><Icon_document /></div>
    <h3 on:click="{showdoc(doc)}">{doc.data.title}</h3>
  {/if}
  <div class="icon" on:click={showoptions}><Icon_more /></div>
</li>

<style>
  li{
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    box-shadow: 0 1px rgba(255,255,255,.1);
    cursor: pointer;
  }
  li:hover{
    background: rgba(255,255,255,.1);
  }
  h3{
    width: 100%;
    margin-left: 6px;
    /* Rules to prevent break page */
    white-space: nowrap;
    overflow: hidden;
  }
  .icon{
    padding: 6px;
    display: flex;
    position: relative;
    background: #484848;
  }
</style>