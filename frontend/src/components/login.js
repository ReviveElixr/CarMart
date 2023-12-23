import React, { useState } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
 

  const PostData = async (e)=>{
    e.preventDefault();
    
    const res = await fetch("http://localhost:5000/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }) 
    const data = await res.json();
    console.log("hell")
    console.log("data", data);
    if(data.error || data.status == 422 || data.status == 400 || !data){
      window.alert("credentials not matched !!");
      console.log("credentials not matched !");
    }else{
      window.alert("login successfull !");
      console.log("login successfull");
      history.push("/home");
    }
  }

  return (
    <div className="App">
    <div className="login-container">
      <h2>Bike Login</h2>
      <form method="POST">
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={ PostData}>
          Login
        </button>
        
        <a href="signUp">New User</a>
      </form>
    </div>
    </div>
  );
};



export default Login;
