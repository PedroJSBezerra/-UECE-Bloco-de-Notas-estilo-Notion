<script>
  import {currentDoc} from '../../lib/functions'
</script>

<div class="currentdoc">
  <h3>{$currentDoc.title}</h3>
  <p>{$currentDoc.data}</p>
</div>

<style>
  .currentdoc{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem 0;
    position: fixed;
    top: 0;
  }
</style>