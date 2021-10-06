<script>
  import AddDoc from './AddDoc.svelte'
  import Document from './Document.svelte'
  import { docList } from '../../lib/functions'
  import { getAuth } from 'firebase/auth'
  import {onSnapshot, getFirestore, collection} from 'firebase/firestore'

  const db = getFirestore()
  const auth = getAuth()

  onSnapshot(collection(db, auth.currentUser.uid), (querySnapshot) => {
    let documentList = []
    querySnapshot.forEach((doc) => {
      let docobj = {
        id:doc.id,
        data: doc.data()
      }
      documentList.push(docobj)
    })
    docList.set(documentList)
  })

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