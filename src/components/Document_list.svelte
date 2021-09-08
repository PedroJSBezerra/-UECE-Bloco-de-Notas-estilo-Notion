<script>
  import Button_add_document from "./Button_add_document.svelte"
  import Document from './Document.svelte'
  import Overlay_document from './Overlay_document.svelte'
  import {visible} from '../stores'
  import {auth, db} from '../firebase'

  let list = []
  
  db
  .collection('users')
  .doc(auth.currentUser.uid)
  .collection('documents')
  .get().then((snapshot) => {
    snapshot.forEach((childsnapshot) => {
      let id = childsnapshot.id
      let data = childsnapshot.data()
      list = list.concat(data)
    })
  })

</script>

{#if $visible}
    <Overlay_document />
{/if}

<div class="document_list_scroll">
  <Button_add_document 
    on:click={() => visible.update(v => v = !v)} 
  />
  {#each list as document}
    <Document {document}/>
  {/each}
</div>

<style>
  .document_list_scroll{
    height: 95vh;
    padding: 0 20px;
    overflow-y: auto;
  }
</style>