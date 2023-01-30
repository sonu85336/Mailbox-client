import { Fragment, useEffect,useState} from "react";
import { Route ,Switch,Redirect} from "react-router-dom";
import AuthForm from "./component/AuthForm";
 
  import EmailDetails from './component/Pages/screenPage/EmailDetails'
 import  './component/Css/app.css'
import Header from "./component/Pages/screenPage/Header";
import Sidebar from "./component/Pages/screenPage/Sidebar";
import EmailList from "./component/Pages/screenPage/EmailList";
import Compose from "./component/Pages/Compose";
 
 
import { useDispatch, useSelector } from "react-redux";
import SentDetails from "./component/Pages/Sent/SentDetails";
// import { db } from "./component/firebase/firebase";
 
  import { fetchingAllData } from "./Store/Mail-actions";
import SentList from "./component/Pages/Sent/SentList";
function App() {
  const email = localStorage.getItem('email')
  const dispatch = useDispatch()
  const composeopen = useSelector((state)=>state.compose.composeisopen)
  useEffect(()=>{
  dispatch(fetchingAllData())
  },[dispatch])
  return (
   <Fragment>
     
    <Route  path='/authpage'><AuthForm/> </Route>
    
    
    
    <Header/>

    
    <div className="app__body">
    <Sidebar/>
  <Route path='/welcomepage' exact><EmailList/></Route> 
  <Route path='/welcomepage/mailpage'><EmailDetails/></Route>
    <Route path='/welcomepage/sent' >
    <SentList/>
  </Route>     
   <Route path='/welcomepage/sent/sentmail'>
   <SentDetails/>
   </Route>
     
   
     {composeopen&&<Compose/>}
    
   </div>
  
   </Fragment>
  );
}

export default App;
