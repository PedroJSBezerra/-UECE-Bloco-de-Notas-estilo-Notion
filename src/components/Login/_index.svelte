<script>
  import Button_google_login from './Button_google_login.svelte'
</script>

<div class="login">
  <h3>Para começar faça login</h3>
  <Button_google_login />
</div>

<style>
.login{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h3{
  margin: 40px;
}
</style>