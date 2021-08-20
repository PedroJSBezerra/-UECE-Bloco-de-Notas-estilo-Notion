<div class="register">
  <form>
    <input type="text" placeholder="Titulo">
    <textarea placeholder="Digite aqui seu texto."></textarea>
    <input type="submit" value="Salvar">
  </form>
</div>

<style>
  .register{
    height: 90vh;
    margin: 0 2%;
  }
  .register form {
    height: 100%;
		display: flex;
		flex-direction: column;
    justify-content: space-around;
  }
  .register form input, textarea {
    font-size: 1.4rem;
  }
  .register form textarea{
    flex: 1;
    resize: none;
  }
</style>