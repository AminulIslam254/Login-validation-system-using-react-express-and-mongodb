import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Registercss1.css";
import { useNavigate } from "react-router-dom";



function Register() {
  const initialState = { username: "", email: "", password: "" };
  const [formValue, setformValue] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
  let navigate = useNavigate();

  const handleonchange = (event) => {

    const { name, value } = event.target;
    setformValue({ ...formValue, [name]: value });

  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //preventing the page getting refreshed
    setFormErrors(validate(formValue));
    setissubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && issubmit) {
      console.log(formValue);
    }


  }, [formErrors,formValue,issubmit])

  const registerprocess = () => {
    if (validate(formValue).email === undefined && validate(formValue).username === undefined && validate(formValue).password === undefined) {
      // const { username, email, password } = formValue;
      axios.post("http://localhost:5000/register", formValue)
        .then(res=>{
          // history.push("/login");
          navigate("/login");
        })
    }

      // console.log("up");
      // console.log(validate(formValue).email);
      // console.log("down");
      

  }

  return (
    <>
      <div className="box1" style={{ backgroundColor: "rgb(173, 255, 47)", height: "100%", width: "100%", position: "absolute" }}>
      </div>
      <div className='container1'>
        {/* <pre>{JSON.stringify(formValue, undefined, true)}</pre> <-- to show the form value */}
        <div className="form2">

          <form action="" className='innerform1' onSubmit={handleSubmit}>
            <h6 style={{ color: "red" }}>{formErrors.username}</h6>
            <input type="text" placeholder='Enter username' name="username" id="" className='type1' value={formValue.username} onChange={handleonchange} />
            <h6 style={{ color: "red" }}>{formErrors.email}</h6>
            <input type="email" placeholder='Enter Email' name="email" id="" className='type1' value={formValue.email} onChange={handleonchange} />
            <h6 style={{ color: "red" }}>{formErrors.password}</h6>
            <input type="password" placeholder='Enter password' name="password" id="" className='type1' value={formValue.password} onChange={handleonchange} />
            <button type='submit' className='type1' onClick={registerprocess}>Register </button>
          </form>
        </div>
        <div className="login1">
          <button><Link to="/login">Login</Link></button>
        </div>
      </div>

    </>
  )
}

export default Register