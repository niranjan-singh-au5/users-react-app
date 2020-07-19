import React, { useState, useEffect } from "react";
import { loginApi, userLogin } from "../actionCreators/action";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUserLogin = () => {
    userLogin(username, password).then((res) =>
      localStorage.setItem("token", res.data.token)
    );
  };
  return (
    <div className='col-md-3 offset-4 mt-5 bg-light shadow p-2'>
      <div className='form-group mt-2'>
        <label for='exampleInputEmail1'>User Name:</label>
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
        <label for='exampleInputPassword1'>Password:</label>
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
          <label className='form-check-label' for='exampleCheck1'>
            Keep me logged in
          </label>
        </div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => handleUserLogin()}
          disabled={username && password ? false : true}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
