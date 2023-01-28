import react from 'react'
import './css/header.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

import { IconButton,Avatar } from '@material-ui/core';
const Header = ()=>{
    return (
        <div  className='header'>
            <div className='header_left'>
            <IconButton><ReorderIcon></ReorderIcon></IconButton>
            <img src="https://github.com/sonu85336/Mailbox-client/blob/main/gmail-logo.jpg?raw=true" alt="logo" width='80px' />
              
            </div>
            <div className='header_middle'>
                <div className='search_mail'>
                <IconButton><SearchIcon></SearchIcon></IconButton>
                <input type="text" placeholder='search mail'/>
                <IconButton><KeyboardArrowDownIcon></KeyboardArrowDownIcon></IconButton>
                </div> 
            </div>
            <div className='header_right'>
           <IconButton><HelpOutlineIcon></HelpOutlineIcon></IconButton>
           <IconButton> <SettingsIcon></SettingsIcon></IconButton>
           <IconButton>    <AppsIcon></AppsIcon></IconButton>
            <Avatar src="https://pixlr.com/images/index/remove-bg.webp"></Avatar>
            </div>
        </div>
    )
}
export default Header