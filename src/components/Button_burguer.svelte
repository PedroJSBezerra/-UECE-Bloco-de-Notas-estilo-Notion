<script>
  export let open
</script>

<div 
  on:click 
  class={open? "burguer open" : "burguer"}
>
  <span></span>
  <span></span>
  <span></span>
</div>

<style>

  .burguer{
    cursor: pointer;
    z-index: 2;
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    transition: all .3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  }
  .burguer:hover{
    background: rgba(255,255,255,.1);
  }
  .burguer.open{
    margin: 20px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  .burguer span{
    display: block;
    position: absolute;
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all .3s ease-in-out;
  }
  .burguer span:nth-child(1){
    transform: translateY(-8px);
  }
  .burguer span:nth-child(3){
    transform: translateY(8px);
  }
  .burguer.open span:nth-child(1){
    transform: translateY(0) rotateZ(45deg);

  }
  .burguer.open span:nth-child(2){
    transform: translateY(0) rotateZ(-45deg);
  }
  .burguer.open span:nth-child(3){
    transform: translateY(24px);
    opacity: 0;
  }
</style>