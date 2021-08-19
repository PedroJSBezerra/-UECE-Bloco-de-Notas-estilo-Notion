import styled from 'styled-components'
import googlesignlogo from './assets/btn_google_signin_dark_normal_web.png'

function Login() {
  return (
    <Slogin>
      <div className="login">
        <button><img src={googlesignlogo} alt="Login com Google" /></button>
      </div>
    </Slogin>
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
    button{
      padding: 0;
      background: none;
      border-width: 1px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 188px;
      height: 43px;
      border-radius: 3px;
    }
  }
`

export default Login;
