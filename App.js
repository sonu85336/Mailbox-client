import Header from "./Header";
import Sidebar from "./Sidebar";
import "./css/app.css";
import EmailList from './EmailList'
import Compose from "./Compose";
import { useSelector } from "react-redux";
import { selectsendMessageIsOpen } from "./Store/MailSlice";
function App() {
  const isMessageOpen = useSelector(selectsendMessageIsOpen)
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar></Sidebar>
        <EmailList/>
      </div>
    {isMessageOpen &&<Compose/> }  

      
      
    </div>
  );
}

export default App;
