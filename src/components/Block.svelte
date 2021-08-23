<script>
  let notes = []
  let uid = notes.length +1

  const add = (e) => {
    const note = {
      id: uid++,
      text:''
    }
    notes = [...notes, note]
    let list = e.target.previousElementSibling
    list.scrollTop = list.scrollHeight-list.offsetHeight
    console.dir(list.scrollTop)
  }
  const remove = (note) => {
    notes = notes.filter( n => n !== note)
  }
</script>
<!-- modificador self dispara o evento apenas se for disparado por ele mesmo -->
<div class="list">
  {#each notes as note}
  <div class="note">
    <div 
      class="text"
      bind:innerHTML={note.text} 
      contenteditable="true" 
      placeholder="Clique aqui para editar..."
    ></div>
    <button class="remove" on:click={() => remove(note)}>Remove</button>
    </div>
  {/each}
</div>

<style>
  .list{
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    overflow-y: auto;
    padding: 0 0 100vh 0;
  }
  .note{
    position: relative;
    padding: 5px;
    background: rgba(255,255,255,.2);
    border-radius: 4px;
    margin-bottom: 4px;
  }
  .note:hover .remove {
    opacity: .4;
  }
  .remove {
    border-radius: 5px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: .2;
    margin: 5px;
    padding: 5px 10px;
    font-weight: bolder;
  }
  .remove:focus{
    opacity: 1;
    background: red;
    color: white;
  }
  .remove:hover{
    background: red;
    color: white;
  }
  [contenteditable]{
    outline: 0px solid transparent;
  }
  [contenteditable]:empty:before{
    content: attr(placeholder);
    color: rgba(255,255,255,.4);
  }
</style>