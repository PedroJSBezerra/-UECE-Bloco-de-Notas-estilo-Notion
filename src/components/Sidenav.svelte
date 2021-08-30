<script>
  import Icon_power from '../assets/icon_power.svelte'
  import Icon_close from '../assets/icon_close.svelte'
  import { auth } from "../firebase";
  import { open } from "./stores"
  let user = auth.currentUser;
  let side_toggle = () => {$open = !open}
</script>

<div class="{$open ? 'side open':'side'}">
  <Icon_close ref="close" on:click="{side_toggle}" />
  <input 
    class="userimgside"
    type="image"
    src={user.photoURL}
    alt="Foto do usuário"
    referrerpolicy="no-referrer"
    on:click="{side_toggle}"
  />
  <h3 class="username">{user.displayName}</h3>
  <div class="options">
    <button 
      class="logout" 
      on:click="{() => auth.signOut().then(side_toggle)}" 
    >
    <Icon_power ref="power"/>
    <span>Logout</span>
    </button>
  </div>
</div>

<style>
  .side {
    z-index: 1;
    display: flex;
    position: fixed;
    left: -100%;
    top: 0;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background: #444;
    transition: left 0.23s cubic-bezier(0.4, 0, 1, 1);
  }
  .side.open {
    left: 0;
    transition: left .28s ease-out;
  }
  :global([ref="power"]){
    width: 1.8rem;
    height: 1.8rem;
  }
  :global([ref="close"]){
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    left: 0;
    align-self: flex-start;
    margin: 8px;
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
    margin-top: 1rem;
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
