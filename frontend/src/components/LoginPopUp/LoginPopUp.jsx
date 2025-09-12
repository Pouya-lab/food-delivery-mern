import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

function LoginPopUp( { setShowLogin  }) {


    const [ currentState , setCurrentState ] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{ currentState }</h2>
                <img onClick={ ()=> { setShowLogin( false ) } } src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                { currentState === "Login" ? <> </> : <input type="text" placeholder='Your Name' required /> }
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
            </div>
            <button>{ currentState === "Sign Up" ? "Create Acount" : "Login" }</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            
            {currentState === "Login" ?  
            <p>Create New Account <span onClick={ ()=>{setCurrentState("Sign Up")} }>Click Here</span></p>
            : 
              <p>Already Have and Account? <span  onClick={ ()=>{setCurrentState("Login")} }>Click Here</span></p> }
           
        </form>
    </div>
  )
}

export default LoginPopUp