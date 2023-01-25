import { Fragment } from "react";
import { Route ,Switch,Redirect} from "react-router-dom";
import AuthForm from "./component/AuthForm";
import  WelcomePage from './component/Pages/WelcomePage'
function App() {
  return (
   <Fragment>
    <Route path='*' ><Redirect to='authpage'/></Route>
    <Route  path='/authpage'><AuthForm/></Route>
    <Route  path='/welcomepage'><WelcomePage/></Route>
   
   </Fragment>
  );
}

export default App;
