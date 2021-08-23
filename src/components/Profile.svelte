<script>
  let user = {
    name: 'Google user name',
    photoURL: ''
  }

  const logout = () => {
    console.log('loged out')
  }
</script>

<div class="profile">
  <img class="photo" src={user.photoURL} alt="">
  <div class="name">{user.name}</div>
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