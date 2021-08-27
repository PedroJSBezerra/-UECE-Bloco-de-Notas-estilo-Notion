<script>
  import { auth } from "../firebase";
  import Icon_power from '../assets/icon_power.svelte'
  import Icon_close from '../assets/icon_close.svelte'
  import { fly } from 'svelte/transition'

  let user = auth.currentUser;
  console.log(user)
  let power = 'greenyellow'

  let open = false

</script>

<div class="{open ? 'profile open':'profile'}">
  <input 
    class="userimg"
    type="image"
    src={user.photoURL}
    alt="Foto do usuário"
    referrerpolicy="no-referrer"
    on:click="{() => open = open ? false:true}"
  />
  {#if open}
    <Icon_close ref="close" on:click="{() => open = false}" />
    <h4 class="username">{user.displayName}</h4>
    <div class="options">
      <button 
        class="logout" 
        on:click="{() => auth.signOut().then(power = 'red')}" 
      >
        <Icon_power ref="{power}"/>
        <span>Sair</span>
      </button>
    </div>
  {/if}
</div>

<style>
  .profile {
    display: flex;
  }
  .userimg {
    width: 45px;
    border-radius: 50%;
  }
  .username{
    padding: 5px;
  }
  /* ==== PROFILE OPEN ==== */
  .profile.open{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background: #444;
    padding: 15%;
    animation: open .2s;
  }
	@keyframes open {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}
  .profile.open .userimg{
    width: 140px;
  }
  .options{
    width: 100%;
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
  :global([ref="close"]){
    position: fixed;
    inset: 1rem;
    cursor: pointer;
  }
</style>
