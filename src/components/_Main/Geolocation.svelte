<script>
  import Icon_mappin from '../../assets/Icon_mappin.svelte'
  import Icon_navigate from '../../assets/Icon_navigate.svelte'
  import Icon_minus from '../../assets/Icon_minus.svelte'
  import { currentDoc } from '../../lib/functions'

  export const addLocation = () => {
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
      let oldArr = $currentDoc.geolocation
      oldArr.push(geoobj)
      $currentDoc.geolocation = oldArr
    })
  }
  const removeLocation = (index) => {
    $currentDoc.geolocation.splice(index, 1)
    $currentDoc.geolocation = $currentDoc.geolocation
  }
</script>

<div class="geolocation">
  <div class="addLocation" on:click="{() => addLocation()}">
    <span>Adicionar Geolocalização</span>
    <div class="icon"><Icon_mappin /></div>
  </div>
  <ul>
    {#each $currentDoc.geolocation as item, index}
      <li>
        <div class="icon"><Icon_navigate /></div>
        <span class="date">{item.date}</span>
        <span class="time">{item.time}</span>
        <div class="icon delete" on:click="{() => removeLocation(index)}"><Icon_minus /></div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .geolocation{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0 4rem;
  }
  .addLocation{
    cursor: pointer;
    background: rgba(255,255,255,.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    text-align: center;
  }
  .addLocation:hover{
    background: rgba(255,255,255,.2);
  }
  .addLocation span{
    margin: 1rem;
  }
  ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ul li {
    background: rgba(255,255,255,.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 85%;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;
  }
  .icon{
    padding: 10px;
    display: flex;
  }
  .delete:hover{
    background: rgba(255,255,255,.2);
  }
</style>