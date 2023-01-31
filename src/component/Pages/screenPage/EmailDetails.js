 
import { IconButton,Avatar} from '@material-ui/core'

import React, { useEffect } from 'react'
import '../../Css/emaillist.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { LabelImportant } from '@material-ui/icons';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
 
//import MoreVertIcon from '@mui/icons-material/MoreVert';

function EmailDetails(props) {
    
 const item = useSelector((state)=>state.mail.detailsitem)
   
   
 const history = useHistory()

console.log(item)
const backHandler =()=>{
history.replace('/welcomepage')
}

  return (
    <div className='emaildetails'>
    <div  className='emaillist__settings'>
    <div  className='emaillist__settingsLeft'>
        <IconButton onClick={backHandler}>
            <ArrowBackIcon   />
        </IconButton>
        <IconButton>
           <ArrowDropDownIcon/>
        </IconButton>
        <IconButton>
            <RefreshIcon/>
        </IconButton>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>
    </div>
    
      <div className='emaillist__settingsRight'>
        <p>1-50 of 10,156</p>
        <IconButton>
            <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
            <ChevronRightIcon/>
        </IconButton>
      </div>
    </div>
   
        <div className='emaildetails_message'>
    <div className='emaildetails__header'>
        <div className='emaildetails__headerLeft'>
            <h4>{item.subject}</h4>  
            <IconButton>
                <LabelImportant/>
            </IconButton>
        </div>

        <div className='emaildetails__headerRight'>
        <IconButton>
                <PrintIcon/>
            </IconButton>
            <IconButton>
                <LaunchIcon/>
            </IconButton>
        </div>
    </div>

    <div className='emaildetails__middleheader'>
        <div className='emaildetails__middleheaderLeft'>
           
            <IconButton>
                <Avatar/>
            </IconButton> 
             
            <p>{item.from}</p>
        </div>

        <div className='emaildetails__middleheaderRight'>
        <p>3:20pm</p>

        <IconButton>
                <StarIcon/>
            </IconButton>


            <IconButton>
                <ReplyIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div></div>


<div className='emaildetails_body'>
    <p>{item.message}</p>
</div>

    


    </div>

    </div>
  )
}
export default EmailDetails;

