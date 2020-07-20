import React, { useState, useEffect } from "react";
import { userLogin } from "../actionCreators/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState('')
  const handleUserLogin = () => {
    userLogin(username, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((res) => alert("invalid user"));
  };
  return (
    <div className='col-md-3 offset-4 mt-5 bg-light shadow p-2'>
      <div className='form-group mt-2'>
        <label htmlFor='exampleInputEmail1'>User Name:</label>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'>Password:</label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='d-flex justify-content-around'>
        <div className='form-group form-check mt-2'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Keep me logged in
          </label>
        </div>
        <Link
          type='button'
          className='btn btn-primary'
          onClick={() => handleUserLogin()}
          to={username && password ? "/users" : "/login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
