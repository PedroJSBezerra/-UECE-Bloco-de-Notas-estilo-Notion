<script>
  import Icon_mappin from '../../assets/Icon_mappin.svelte'
  import {currentDoc, addLocation} from '../../lib/functions'
  let geolocationList = $currentDoc.geolocation
</script>

<div class="geolocation">
  <div class="addLocation" on:click="{() => addLocation()}">
    <span>Adicionar Geolocalização</span>
    <div class="icon"><Icon_mappin /></div>
  </div>
  {#each geolocationList as item}
    <li>{item.location}</li>
  {/each}
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
  .addLocation > *{
    margin: 1rem;
  }
</style>