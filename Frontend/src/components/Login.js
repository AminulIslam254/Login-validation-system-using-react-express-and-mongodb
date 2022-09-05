import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import "./Loginpagecss1.css"
function Login() {
  
  const initialState = { email: "", password: "" };
  const [formValue, setformValue] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [issubmit, setissubmit] = useState(false);


  const handleonchange = (event) => {

    const { name, value } = event.target;
    setformValue({ ...formValue, [name]: value });

  }

  const validate=(values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
    // console.log(formErrors);
    if(Object.keys(formErrors).length===0 && issubmit){
        console.log(formValue);
    }
  
    
  }, [formErrors])
  

  return (
    < >

        <div className="box1" style={{ backgroundColor: "rgb(173, 255, 47)" ,height:"100%",width:"100%" ,position:"absolute"}}>
        </div>

        <div className='container2'>
          <div className="form1">
            <form action="" className='innerform1' onSubmit={handleSubmit}>
            <h6 style={{color:"red"}}>{formErrors.email}</h6>
              <input type="text" placeholder='Enter Email' name="email" id="" className='type1' onChange={handleonchange} />
              <h6 style={{color:"red"}}>{formErrors.password}</h6>
              <input type="password" placeholder='Enter password' name="password" id="" className='type1' onChange={handleonchange} />
              <button type='submit' className='type1'>Login</button>
            </form>
          </div>
          <div className="register1">
            <button><Link to="/register" >Register</Link></button>
          </div>
        </div>

    </>



  )
}

export default Login