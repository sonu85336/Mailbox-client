import { Fragment, useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthForm from "./component/AuthForm";

import EmailDetails from "./component/Pages/screenPage/EmailDetails";
import "./component/Css/app.css";
import Header from "./component/Pages/screenPage/Header";
import Sidebar from "./component/Pages/screenPage/Sidebar";
import EmailList from "./component/Pages/screenPage/EmailList";
import Compose from "./component/Pages/Compose";

import { useDispatch, useSelector } from "react-redux";
import SentDetails from "./component/Pages/Sent/SentDetails";
// import { db } from "./component/firebase/firebase";

import { fetchingAllData } from "./Store/Mail-actions";
import SentList from "./component/Pages/Sent/SentList";
import WelcomePage from "./component/Pages/WelcomePage";
import { mailActions } from "./Store/Dataget-Slice";
import axios from "axios";
function App() {
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const composeopen = useSelector((state) => state.compose.composeisopen);
  const mailDetailsopen = useSelector((state)=>state.compose.mailisopen)
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  const [counterval,setCounterval]= useState([])
  console.log(isLoggedIn)
  setInterval(()=>{
    
    dispatch(fetchingAllData());
 
  },2000)
// counterval.map((item)=>{
  
   
// })

  // setInterval(  async ()=> {
//   const res =  await  axios.get(`https://mailbox-client-8738c-default-rtdb.firebaseio.com/notification.json` )
//   const loadcout = []
// for(const key in res.data){
// loadcout.push({ countvalue:res.data[key].counter})
// }
// setCounterval(loadcout)
// },3000)
  //   useEffect(()=>{
  
  //   dispatch(fetchingAllData());
  
  // },[dispatch])
 
  return (
    <Fragment>
  {!isLoggedIn  &&<Route path='*'>
 <Redirect   to="/authpage"/>
   </Route>}  
   {isLoggedIn && <Route path='*'><Redirect to='/welcomepage'/></Route>}
     {!isLoggedIn && <Route path="/authpage">
        <AuthForm />{" "}
      </Route>} 

    {isLoggedIn &&<Header />}   

<div className="app__body">
  {isLoggedIn &&   <Sidebar />}


 {isLoggedIn &&  <Route path="/welcomepage" exact>
    <EmailList />
  </Route> }
 
 {isLoggedIn && mailDetailsopen  &&
    <EmailDetails />
 } 
  {isLoggedIn &&<Route path="/welcomepage/sent">
    <SentList />
  </Route>}
  {isLoggedIn &&<Route path="/welcomepage/sentmail">
    <SentDetails />
  </Route>}

  {composeopen && isLoggedIn &&<Compose />}  
</div> 
    </Fragment>
  );
}

export default App;
