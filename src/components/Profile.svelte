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
    display: flex;
    align-items: center;
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
</style>