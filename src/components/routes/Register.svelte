<script>
  let title = 'Titulo'
  let text = 'Digite aqui seu texto'
  
  const handleclick = (e) => {
    e.target.innerHTML =''
  }
</script>

<div class="register" on:click={handleclick}>
  <div 
    contenteditable="true" 
    bind:innerHTML={title} 
    spellcheck="true" 
    class="title"
  ></div>
  <div contenteditable="true" 
    bind:innerHTML={text} 
    spellcheck="true"
  ></div>
</div>

<style>
  .register{
    margin: 2%;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
  }
  .title{
    font-size: 1.8rem;
  }
  .register > *{
    padding: 5px;
    background: #444;
    border-radius: 4px;
    margin-bottom: 2px;
  }
</style>