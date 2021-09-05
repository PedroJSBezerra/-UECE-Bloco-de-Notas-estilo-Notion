<script>
  import {visible} from './stores'
  import Icon_close from '../assets/icon_close.svelte'
  import Icon_delete from '../assets/icon_trash.svelte'
  import Icon_done from '../assets/Icon_checked.svelte'
  import Icon_mappin from '../assets/Icon_mappin.svelte'
  import { fly } from 'svelte/transition'

</script>

<div class="overlay_document" transition:fly={{y:600 ,duration:250}}>

  <div class="options">

    <div class="close" on:click="{() => visible.update(v => v = !v)}">
      <div class="icon">
        <Icon_close />
      </div>
    </div>

    <div class="delete">
      <div class="icon">
        <Icon_delete />
      </div>
    </div>

    <div class="done">
      <div class="icon">
        <Icon_done />
      </div>
    </div>

  </div>

  <div class="docscroll">
    
    <h3 contenteditable class="title">000001 nome e sobrenome do cliente</h3>
    
    <div contenteditable class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque fugit sapiente necessitatibus dignissimos minus sed dolore harum aspernatur labore eveniet magni ducimus tempora, perspiciatis vel sint numquam blanditiis quibusdam ipsa! Rerum ea blanditiis, fugiat officia fuga possimus recusandae velit aliquam. Incidunt magni provident nemo expedita officiis cupiditate, voluptatibus beatae iure deserunt maiores quod veniam perspiciatis architecto? Dolor esse quisquam quidem?</div>
    
    <div class="geolocation">
      <h3>Geolocalização</h3>
      <div class="addlocation">
        <div class="icon">
          <Icon_mappin />
        </div>
        <span>Adicionar Geolocalização</span>
      </div>
    </div>
  
  </div>

</div>

<style>
  .overlay_document{
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #333;
    display: flex;
    flex-direction: column;
    z-index: 2;
  }
  .options{
    background: #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .options > *{
    padding: 10px;
    cursor: pointer;
  }
  .options > *:hover{
    background: rgba(255,255,255,.2);
  }
  .close{
    padding: 10px;
    display: inline-block;
  }
  .docscroll{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 16px;
  }
  .docscroll > *{
    margin-top: 16px;
    background: #555;
    border-radius: 6px;
    padding: 8px;
    overflow: hidden;
  }
  .geolocation{
    padding: 0;
  }
  .geolocation h3{
    text-align: center;
    padding: 10px;
  }
  .addlocation{
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
  }
  .addlocation:hover{
    background: rgba(255,255,255,.2);
    cursor: pointer;
  }
  .addlocation .icon{
    padding: 16px;
  }
</style>