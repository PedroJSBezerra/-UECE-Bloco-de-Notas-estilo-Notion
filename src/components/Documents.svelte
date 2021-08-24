<script>
  let documents = [
    {title: 'document 1'},
    {title: 'document 2'},
    {title: 'document 3'},
    {title: 'document 4'},
    {title: 'document 5'},
    {title: 'document 1'},
    {title: 'document 2'},
    {title: 'document 3'},
    {title: 'document 4'},
    {title: 'document 5'},
    {title: 'document 1'},
    {title: 'document 2'},
    {title: 'document 3'},
    {title: 'document 4'},
    {title: 'document 5'},
    {title: 'document 1'},
    {title: 'document 2'},
    {title: 'document 3'},
    {title: 'document 4'},
    {title: 'document 5'},
    {title: 'document 1'},
    {title: 'document 2'},
    {title: 'document 3'},
    {title: 'document 4'},
    {title: 'document 5'},
    {title: 'document 1'},
    {title: 'document 2'},
    {title: 'document 3'},
    {title: 'document 4'},
    {title: 'document 5'},
  ]
</script>

<ul class="documents">
  {#each documents as document}
    <li>
      <h3>{document.title}</h3>
      <button>delete</button>
    </li>
  {/each}
</ul>
<button class="create">create</button>

<style>
  .documents{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .documents li{
    padding: 5px;
    display: flex;
  }
  .documents li:hover{
    background: rgba(255,255,255,.2);
  }
  .documents li h3{
    flex: 1;
  }
  .create{
    flex: 1;
  }
</style>