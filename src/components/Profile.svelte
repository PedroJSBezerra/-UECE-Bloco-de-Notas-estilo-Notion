<script>
  import {auth} from '../firebase'

  const logout = () => {
    auth.signOut().then(function () {
      
      console.log('loged out')

    })
  }
</script>

<div class="profile">
  <img class="photo" src={auth.currentUser.photoURL} alt="">
  <div class="name">{auth.currentUser.displayName}</div>
  <button class="logout" on:click={logout}>logout</button>
</div>

<style>
  .profile{
    position: relative;
    display: flex;
    align-items: center;
    padding: 2%;
  }
  .photo{
    width: 30px;
    height: 30px;
  }
  .name{
    flex: 1;
  }
  .logout{
    padding: .4rem;
  }
  .profile:after{
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: rgba(255,255,255,.2);
  }
</style>