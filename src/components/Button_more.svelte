<script>
  export let open
</script>

<div on:click class="{open? "toggle open":"toggle"}">
  <span></span><span></span><span></span>
</div>

<style>

  .toggle{
    position: relative;
    display: flex;
    width: 40px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .toggle:hover{
    background: rgba(255, 255, 255, 0.1);
  }
  .toggle span{
    display: block;
    background: white;
    width: 4px;
    height: 4px;
    position: absolute;
    border-radius: 2px;
    transition: all .15s ease-in-out;
  }
  .toggle span:nth-child(1){
    transform: translateX(-10px);
  }
  .toggle span:nth-child(3){
    transform: translateX(10px);
  }
  .toggle.open span:nth-child(1){
    transform: translateX(-25px);
  }
  .toggle.open span:nth-child(2){
    transform: translateX(0) rotateZ(45deg);
    width: 25px;
    height: 2px;
  }
  .toggle.open span:nth-child(3){
    transform: translateX(0) rotateZ(-45deg);
    width: 25px;
    height: 2px;
  }
</style>