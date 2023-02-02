import react from 'react'
 import '../../Css/header.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
 
import { IconButton,Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../Store/Auth-Slice';
import { useHistory } from 'react-router-dom';
 
const Header = ()=>{
    const history = useHistory()
 const dispatch = useDispatch()
 const logoutHandler = ()=>{
    dispatch(authActions.logout(null))
    history.replace('/authpage')
 }
 

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
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDaaMPxQTqQmJ8k436XYtwf-HrqdKimahIea5YIxg&s' onClick={logoutHandler} ></Avatar>
            </div>
        </div>
    )
}
export default Header