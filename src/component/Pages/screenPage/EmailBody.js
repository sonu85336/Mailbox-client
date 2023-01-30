import React, { useEffect } from 'react'
import '../../Css/emaillist.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useHistory } from 'react-router-dom';
 
 import { useState } from 'react';

function EmailBody(props) {
  const email = localStorage.getItem('email')
  const [emailshow,setEmailshow]= useState(false)
  let from;
  let subject;
let message;
useEffect(()=>{
  if(props.item.to===email){
    setEmailshow(true)
   }
},[])
  
 
  return (
    <div>
   {emailshow&& <div className='emailbody'>
    <div className='emailbody__left'>
 <CheckBoxOutlineBlankIcon/>
<StarBorderIcon/>
<LabelOutlinedIcon/>
<h4>{props.item.from}</h4>
    </div>
    <div className='emailbody__middle'>
        <div className='emailbody__middle_msg'>
            <p><b>{props.item.subject}</b>{props.item.message}</p>
        </div>
        </div>
        <div className='emailbody__right'>
        <p>3:30 PM</p>
        </div>
      
    </div>}</div>
  )
}

export default EmailBody
