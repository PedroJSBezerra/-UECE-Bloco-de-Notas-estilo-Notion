<script>
  import { fly } from 'svelte/transition'
  import Icon_document from '../../assets/icon_document.svelte'
  import Icon_more from '../../assets/icon_more.svelte'
  import RemoveDoc from './RemoveDoc.svelte'

  export let doc
  export let index
  let options = false
</script>

<li in:fly={{y: 200, duration: 300+index*400}}>
  {#if  options}
    <RemoveDoc {doc} {index} />
  {/if}
  <div class="icon"><Icon_document /></div>
  <h3>{doc.title}</h3>
  <div class="icon" on:click={() => options = !options}><Icon_more /></div>
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
  }
</style>