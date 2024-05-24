import { useState, useEffect } from 'react';
import './layout//Login.css';
import Profile from './Profile.jsx';
import GetData from './data.js';
import Registration from './Registration.jsx';

function Login() {
  const [isLoggedIn, setLogin] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [login, setLoginInput] = useState('');
  const [password, setPasswordInput] = useState('');

  localStorage.removeItem('login');
  localStorage.removeItem('password');// временная заглушка для просмотра логина
  
  useEffect(() => {
    const savedLogin = localStorage.getItem('login');
    const savedPassword = localStorage.getItem('password');
    if (GetData(savedLogin, savedPassword)) {
      setLoginInput(savedLogin);
      setPasswordInput(savedPassword);
    }
  }, []);

  const handleLogin = () => {
    console.log(login, password) // dev
    if (GetData(login, password)) {
      setLogin(true);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      
    } else {
      alert("Wrong login or password");
      document.querySelector('#password').reset();
    }
  };

  if (registration) {
    return <Registration />
  }
  if (isLoggedIn) {
    return <Profile />
  }

  return (
    <>
        <h1>Profiler</h1>
        <form id="login">
          <label className="form">
            <input type="login" name="username" placeholder='Username' value={login} onChange={(e) => setLoginInput(e.target.value)}/>
          </label>
          <label className="form">
            <input type="password" name="password" placeholder='Password' value={password} onChange={(e) => setPasswordInput(e.target.value)} />
          </label>
          <button className="but" onClick={handleLogin}>Login</button>
          <button className="but" onClick={() => setRegistration(true)}>Registration</button>
        </form>
    </>
  )
}

export default Login