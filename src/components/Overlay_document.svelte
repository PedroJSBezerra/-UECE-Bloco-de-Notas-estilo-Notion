<script>
  import {visible} from './stores'
  import Icon_close from '../assets/icon_close.svelte'
  import Icon_delete from '../assets/icon_trash.svelte'
  import Icon_done from '../assets/Icon_checked.svelte'
  import Icon_mappin from '../assets/Icon_mappin.svelte'
  import Icon_navigate from '../assets/Icon_navigate.svelte'
  import Icon_minus from '../assets/Icon_minus.svelte'
  import { fly } from 'svelte/transition'

  let title = ''
  let description = ''
  let geolocation_list = []

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition( position => {
      const {latitude, longitude} = position.coords
      
      let date = new Date(position.timestamp)
      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      
      let geolocation = `${latitude} ${longitude}`
      let geolocation_date = `${day}/${month}/${year}`
      let geolocation_time = `${hour}:${minute}:${second}`

      let geoobj = {
        date: geolocation_date,
        time: geolocation_time,
        coordinates: geolocation,
      }
      geolocation_list = geolocation_list.concat(geoobj)
    })
  }

  const saveDocument = () => {
    console.log(title)
    console.log(description)
    console.log(geolocation_list)
  }

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

    <div class="done" on:click="{saveDocument}">
      <div class="icon">
        <Icon_done />
      </div>
    </div>

  </div>

  <div class="docscroll">
    
    <h3 contenteditable class="title" bind:innerHTML="{title}"></h3>
    
    <div contenteditable class="description" bind:innerHTML="{description}"></div>
    
    <div class="geolocation">

      <h3>Geolocalização</h3>
      
      <div class="addlocation" on:click="{getCurrentPosition}">
        <div class="icon">
          <Icon_mappin />
        </div>
        <span>Adicionar</span>
      </div>

      <ul class="location_list">
        {#each geolocation_list as item, index}
          <li>
            <div class="navigate">
              <div class="icon"><Icon_navigate /></div>
              <span>{item.date} as {item.time}</span>
            </div>
            <div class="icon remove" on:click="{() => console.log(index)}"><Icon_minus /></div>
          </li>
        {/each}
      </ul>
    
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
    overflow-y: auto;
    padding: 0 8px;
  }
  .docscroll > *{
    margin-top: 16px;
    background: #555;
    border-radius: 6px;
    padding: 8px;
    overflow: hidden;
  }
  .geolocation{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .geolocation h3{
    padding: 10px;
  }
  .addlocation{
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    background: #444;
  }
  .addlocation:hover{
    background: rgba(255,255,255,.2);
    cursor: pointer;
  }
  .icon{
    padding: 8px;
  }
  .addlocation span{
    text-align: center;
  }
  .location_list{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
    list-style-type: none;
  }
  .location_list li{
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #444;
    border-radius: 6px;
    overflow: hidden;
  }
  .navigate{
    display: flex;
    align-items: center;
    flex: 1;
  }
  .navigate span{
    text-align: center;
    width: 100%;
  }
  :where(.navigate, .icon.remove):hover{
    background: rgba(255,255,255,.2);
    cursor: pointer;
  }
</style>