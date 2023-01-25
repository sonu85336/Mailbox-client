import React,{useRef} from "react";
import { useState } from "react";
import classes from  './Css/AuthForm.module.css'
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isValid,setIsValid]= useState(false);
  const [password,setPassword] = useState('')
  const [confirmPassword,setconfirmPassword]=  useState("")

  const emailInputRef = useRef();
  const passwordInputRef = useRef()
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const validateConfirmPassword=(password,confirmPassword)=>{
    return password === confirmPassword;

  }
  const handlePasswordchange = (event )=>{
    setPassword(event.target.value)
    
  }
  const handlerConfirmPasswordChange = (event)=>{
    setconfirmPassword(event.target.value);
    setIsValid(validateConfirmPassword(password,event.target.value))
  }

  const submitHandler = (event)=>{
    event.preventDefault();
   const enteredEmail = emailInputRef.current.value;
   const enteredPassword = passwordInputRef.current.value;
   if(password === confirmPassword && !isLogin){
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOOOOlMZcdKOFENv7a6j5BAfdvpluWsWY',{
        method:'POST',
        body:JSON.stringify({
email:enteredEmail,
password:enteredPassword,
returnSecureToken:"true",
        }),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((res)=>{
        console.log('Successfull');
    })
    .catch((err)=>{
        console.log(err)
    })
   }
   if(isLogin){
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOOOOlMZcdKOFENv7a6j5BAfdvpluWsWY',{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,	
            password:enteredPassword,	
            returnSecureToken:true,
        }),
        headers:{
            "Content-Type":"application/json",
        },
    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }else{
            return res.json().then((data)=>{
                let errorMessage= "Authentication failed!";
                if(data&&data.error&&data.error.message){
                    errorMessage = data.error.message;
                }
                throw new Error(errorMessage)
            })
        }
    }).then((data)=>{
        console.log(data)
        localStorage.setItem("token",data.idToken);
        localStorage.setItem("email",data.email)
    }).catch((err)=>{
        console.log(err.message)
        alert(err.message)
    })
   }
  

  }
  return (
    <React.Fragment>
      <section>
        <div  className={classes.auth}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form  onSubmit={submitHandler}>
            <div>
              <div>
                <label htmlFor="emial">Email</label>
              </div>
              <div>
                <input type="email" ref={emailInputRef} required></input>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input type="password" ref={passwordInputRef} value={password} onChange={handlePasswordchange} required></input>
              </div>
            </div>
            
             {!isLogin && (<div> <div><label htmlFor="password">Confirm Password</label>
              </div>
              <div>
                <input type="password"  value={confirmPassword} onChange={handlerConfirmPasswordChange} required></input>
                {isValid ? null :( <p style={{ color: "red" }}> ! password do not match...</p>)}
              </div>
            </div> )} 
           
                
            <div><button>{isLogin? 'Login' :'Sing up'}</button>
       <div>     <button type='button' onClick={switchAuthModeHandler}>
                {isLogin ? "Create new account" :"Have an account ? Login"}
            </button></div>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}
export default AuthForm;
