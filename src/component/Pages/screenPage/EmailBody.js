import React from 'react'
import '../../Css/emaillist.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useHistory } from 'react-router-dom';
 
 

function EmailBody( ) {
   
 
  return (
    <div className='emailbody'  >
    <div className='emailbody__left'>
<CheckBoxOutlineBlankIcon/>
<StarBorderIcon/>
<LabelOutlinedIcon/>
<h4>sonu kushwaha </h4>
    </div>
    <div className='emailbody__middle'>
        <div className='emailbody__middle_msg'>
            <p><b>react</b>hello react</p>
        </div>
        </div>
        <div className='emailbody__right'>
        <p>3:30 PM</p>
        </div>
      
    </div>
  )
}

export default EmailBody
