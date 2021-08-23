<script>
  import Burguer from './Burguer.svelte'
</script>
<div class="nav">
  <h3 class="title">First text note</h3>
  <Burguer />
</div>

<style>
  .nav{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2%;
    margin-bottom: 2%;
  }
  .title{
    flex: 1;
  }
  .nav:after{
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: rgba(255,255,255,.2);
  }
</style>