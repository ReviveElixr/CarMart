import React, { useState } from 'react';
import './signUp.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Registration = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');



  const PostData = async (e)=>{

    e.preventDefault();
    if(password!=cpassword){
      return window.alert("password and Confirm password not matched!");
    }

    const res = await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password,
        cpassword
      })
    });
    const data = await res.json();
    console.log(data);
    if(data.status == 422 || data.status == 400 || !data){

      window.alert("server give bad response register Unsuccessful!!!!!");
      console.log("server give bad response register Unsuccessful!!!!!");

    }else{

      window.alert("registration successfull !");
      console.log("registration successfull");
      history.push("/login");

    }
  }

  return (
    <div className="registration-container">
      <h2>Create an Account</h2>
      <form methos="POST">
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={PostData}>
          Register
        </button>
        <a href="login">Login</a>

      </form>
    </div>
  );
};

export default Registration;
