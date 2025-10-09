import { useContext ,useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"



function LoginPopUp( { setShowLogin  }) {

  const { url , setToken } = useContext(StoreContext)


    const [ currentState , setCurrentState ] = useState("Sign Up")
    const [ data , setData ] = useState({
      name : "" ,
      email : "",
      password : ""
    })

    const onChangeHandler = ( event )=>{
      const name = event.target.name;
      const value = event.target.value;

      setData( data =>({ ...data , [name]:value }))

    }

    const onLogin = async( event )=>{
      event.preventDefault()
      let newUrl = url;

      if (currentState === "Login") {
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }
      // sending the data to the selected url based on the current state from backend
      const response = await axios.post( newUrl , data )

      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem( "token" , response.data.token )
        setShowLogin(false)
      }
      else{
        alert(response.data.mesage)
      }
      
    }

 

  return (
    <div className='login-popup'>
        <form onSubmit={ onLogin } action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{ currentState }</h2>
                <img onClick={ ()=> { setShowLogin( false ) } } src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                { currentState === "Login" ? <> </> : <input onChange={ onChangeHandler } name='name' value={data.name} type="text" placeholder='Your Name' required /> }
                    <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Your Email' required />
                    <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Password' required />
            </div>
            <button type='submit' >{ currentState === "Sign Up" ? "Create Acount" : "Login" }</button>
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