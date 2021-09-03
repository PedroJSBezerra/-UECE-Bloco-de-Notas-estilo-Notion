<script>
  export let open
</script>

<div 
  on:click 
  class={open? "burguer open" : "burguer"}
>
  <span></span>
  <span></span>
</div>

<style>

.burguer{
    cursor: pointer;
    z-index: 2;
    position: relative;
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  }
  .burguer span{
    display: block;
    position: absolute;
    width: 26px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all .2s ease-in-out;
  }
  .burguer span:nth-child(1){
    transform: translateY(-6px);
  }
  .burguer span:nth-child(2){
    transform: translateY(6px);
  }
  .burguer.open span:nth-child(1){
    transform: translateY(0) rotateZ(45deg);

  }
  .burguer.open span:nth-child(2){
    transform: translateY(0) rotateZ(-45deg);
  }
</style>