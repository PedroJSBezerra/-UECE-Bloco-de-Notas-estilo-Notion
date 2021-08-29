<script>
  import Icon_power from '../assets/icon_power.svelte'
  import Icon_close from '../assets/icon_close.svelte'
  import { auth } from "../firebase";
  import { open } from "./stores"
  let user = auth.currentUser;
  let power = 'greenyellow'
</script>

<div class="{$open ? 'side open':'side'}">
  <Icon_close ref="close" on:click="{() => $open = !open}" />
  <input 
    class="userimgside"
    type="image"
    src={user.photoURL}
    alt="Foto do usuário"
    referrerpolicy="no-referrer"
    on:click="{() => $open = !open}"
  />
  <h4 class="username">{user.displayName}</h4>
  <div class="options">
    <button 
      class="logout" 
      on:click="{() => auth.signOut().then(power = 'red')}" 
    >
    <Icon_power ref="{power}"/>
    <span>Logout</span>
    </button>
  </div>
</div>

<style>
  .side {
    display: flex;
    position: fixed;
    z-index: 1;
    left: -100%;
    top: 0;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background: #444;
    transition: left 0.23s ease-out;
  }
  .side.open {
    left: 0;
    transition: left 0.3s ease-in;
  }
  :global([ref="close"]){
    cursor: pointer;
    left: 0;
    align-self: flex-start;
    margin: 10px;
  }
   .userimgside{
    width: 140px;
    border-radius: 50%;
  }
   .username{
    padding: 10px;
  }
  .options{
    width: 70%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .options> *{
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
  }
  .options::before{
    content: '';
    width: 100%;
    height: 2px;
    background: rgba(255,255,255,.2);
  }
  .logout{
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
  }
  .logout:hover{
    background: rgba(255,255,255,.2);
  }
  .logout span {
    margin-left: 10px;
    color: white;
  }
</style>
