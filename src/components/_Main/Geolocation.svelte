<script>
  import Icon_mappin from '../../assets/Icon_mappin.svelte'
  import Icon_navigate from '../../assets/Icon_navigate.svelte'
  import Icon_minus from '../../assets/Icon_minus.svelte'
  import {currentDoc, addLocation} from '../../lib/functions'
  let geolocationList = $currentDoc.data.geolocation
</script>

<div class="geolocation">
  <div class="addLocation" on:click="{() => addLocation($currentDoc)}">
    <span>Adicionar Geolocalização</span>
    <div class="icon"><Icon_mappin /></div>
  </div>
  <ul>
    {#each geolocationList as item}
      <li>
        <div class="icon"><Icon_navigate /></div>
        <span class="time">{item.timestamp}</span>
        <div class="icon delete"><Icon_minus /></div>
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