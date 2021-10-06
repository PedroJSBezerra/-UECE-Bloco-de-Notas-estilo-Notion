<script>
  import { open } from '../../lib/functions'
</script>

<button class="navtoggle {$open? 'open': ''}" on:click>
  <span></span><span></span><span></span>
</button>

<style>
  
  button{
    z-index: 999;
    position: absolute;
    background: rgba(255,255,255,.0);
    border: none;
    cursor: pointer;
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    transition: all .3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  button span{
    display: block;
    position: absolute;
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all .3s ease-in-out;
  }
  button span:nth-child(1){
    transform: translateY(-8px);
  }
  button span:nth-child(3){
    transform: translateY(8px);
  }
  button.open span:nth-child(1){
    transform: translateY(0) rotateZ(45deg);
  }
  button.open span:nth-child(3){
    transform: translateY(0) rotateZ(-45deg);
  }
  button.open span:nth-child(2){
    transform: translateX(24px);
    opacity: 0;
  }
</style>