import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import CreateIcon from "@mui/icons-material/Create";
import "../../Css/sidebar.css";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useSelector, useDispatch } from "react-redux";
import { composeActions } from "../../../Store/Compose-Slice";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import axios from "axios";
import { mailActions } from "../../../Store/Dataget-Slice";
const Sidebar = () => {
  const [activeinbox, setactiveinbox] = useState(true);
  const [activesent,setactivesentbox]= useState(false)
  const [counterval,setCounterval]= useState([])
  const history = useHistory();
  // const counter = useSelector((state)=>state.mail.counter)
  const composeopen = useSelector((state) => state.compose.composeisopen);
  const dispatch = useDispatch();
  function composeHandle() {
    dispatch(composeActions.composeHandler(true));
  }
  const SendButtonHandler = () => {
    history.replace("/welcomepage/sent");
    setactivesentbox(true);
    setactiveinbox(false);
  };
  const inboxHandler = () => {
    history.replace("/welcomepage");
    setactiveinbox(true);
    setactivesentbox(false);

  };

setInterval( async ()=> {
  const res = await  axios.get(`https://mailbox-client-8738c-default-rtdb.firebaseio.com/notification.json` )
  const loadcout = []
for(const key in res.data){
loadcout.push({ countvalue:res.data[key].counter})
}
setCounterval(loadcout)
},15000)

//   useEffect( ()=>{
//     const counterHandler = async ()=> {
//        const res = await  axios.get(`https://mailbox-client-8738c-default-rtdb.firebaseio.com/notification.json` )
//        const loadcout = []
//     for(const key in res.data){
//      loadcout.push({ countvalue:res.data[key].counter})
//     }
//     setCounterval(loadcout)
//     }
//  counterHandler()
  
//   },[])
counterval.map((item)=>{
  dispatch(mailActions.readMail(item.countvalue))
   
})
  
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon />}
        className="compose__btn"
        onClick={composeHandle}
      >
        Compose
      </Button>
      
      <span onClick={inboxHandler}>
       {counterval.map((item)=>(
        <SidebarOption key= {item.id}
          Icon={InboxIcon}
          title="Inbox"
          number={item.countvalue}
          isactive={activeinbox}
        />
       ))} 
      </span>
      <SidebarOption Icon={StarRateIcon} title="Starred" number="300" />
      <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number="1000" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number="500" />
      <span onClick={SendButtonHandler}>
        <SidebarOption
          Icon={SendIcon}
          title="Sent"
          number="100"
          isactive={activesent}
        />{" "}
      </span>
      <SidebarOption Icon={DraftsIcon} title="Drafts" number="50" />
      <SidebarOption Icon={LabelIcon} title="Category" number="20" />
      <SidebarOption Icon={DeleteIcon} title="[Map]/Trash" number="3000" />
      <SidebarOption Icon={FindInPageIcon} title="Documents" number="40" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
      <hr />
      <h3 className="sidebarOptions__heading">Meet</h3>
      <SidebarOption Icon={VideocamIcon} title={"New meeting"} />
      <SidebarOption Icon={KeyboardIcon} title={"Join a meeting"} />
    </div>
  );
};
export default Sidebar;
