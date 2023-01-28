import React from "react";
import { Button } from "@material-ui/core";
import CreateIcon from "@mui/icons-material/Create";
import "./css/sidebar.css";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from "react-redux";
import { openSendMessage } from "./Store/MailSlice";
const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button startIcon={<CreateIcon />} className="compose__btn"  onClick={()=>dispatch(openSendMessage())}>
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number="5000" isactive={true}/>
      <SidebarOption Icon={StarRateIcon} title="Starred" number="300" />
      <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number="1000" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number="500" />
      <SidebarOption Icon={SendIcon} title="Sent" number="100" />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number="50" />
      <SidebarOption Icon={LabelIcon} title="Category" number="20" />
      <SidebarOption Icon={DeleteIcon} title="[Map]/Trash" number="3000" />
      <SidebarOption Icon={FindInPageIcon} title="Documents" number="40" />
      <SidebarOption Icon={ExpandMoreIcon} title="More"  />
<hr/>
      <h3 className="sidebarOptions__heading">
        Meet
      </h3>
      <SidebarOption Icon={VideocamIcon} title={'New meeting'}/>
      <SidebarOption Icon={KeyboardIcon} title={'Join a meeting'}/>
    </div>
  );
};
export default Sidebar;
