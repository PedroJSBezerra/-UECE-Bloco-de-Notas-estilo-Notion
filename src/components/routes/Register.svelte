<script>
  let notes = [
		{ id: 1, text: 'apple' },
		{ id: 2, text: 'banana' },
		{ id: 3, text: 'carrot' },
		{ id: 4, text: 'doughnut' },
		{ id: 5, text: 'egg' },
  ]
  let uid = notes.length +1

  const add = () => {
    const note = {
      id: uid++,
      text:''
    }
    notes = [...notes, note]    
  }
  const remove = (note) => {
    notes = notes.filter( n => n !== note)
  }
  const handlekeydown = (e) => {
    if(e.key == 'Enter'||e.keyCode == 13){
    }
  }
</script>
<!-- modifiador self dispara o evento apenas se for disparado por ele mesmo -->
<div class="register" on:click|self={add}>
  {#each notes as note}
    <div class="note">
      <div 
        class="text"
        bind:innerHTML={note.text} 
        contenteditable="true" 
        placeholder="Clique aqui para editar..." 
        on:keydown={handlekeydown}
      ></div>
      <button on:click={() => remove(note)}>Remove</button>
    </div>
  {/each}
</div>

<style>
  .register{
    margin: 2%;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    min-height: 90vh;
  }
  .note{
    position: relative;
    padding: 5px;
    background: rgba(255,255,255,.2);
    border-radius: 4px;
    margin-bottom: 4px;
  }
  .note:hover button {
    opacity: .4;
  }
  .note button:focus{
    opacity: 1;
  }
  .note button {
    position: absolute;
    top: 0;
    right: 0;
    opacity: .2;
    margin: 5px;
    padding: 5px 10px;
  }
  [contenteditable]{
    outline: 0px solid transparent;
  }
  [contenteditable]:empty:before{
    content: attr(placeholder);
    color: rgba(255,255,255,.4);
  }
</style>