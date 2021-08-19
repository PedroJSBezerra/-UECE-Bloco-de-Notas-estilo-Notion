import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <div className="App">
      <Slogin>
        <div className="login">
          <button><img src="" alt="Login com Google" /></button>
        </div>
      </Slogin>
    </div>
  );
}

const Slogin = styled.div`
  flex: 1;
  .login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .button{
      border: none;
      background: none;
    }
  }
`

export default App;
