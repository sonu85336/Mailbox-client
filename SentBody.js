import React, { useEffect } from 'react'
 import '../../Css/emaillist.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useHistory } from 'react-router-dom';
 import { useDispatch } from 'react-redux';
 import { useSelector } from 'react-redux';
 import { useState } from 'react';
 import DeleteIcon from "@mui/icons-material/Delete";
 import { removingMails } from "../../../Store/Mail-actions";
 
 import { IconButton } from '@mui/material';
import { mailActions } from '../../../Store/Dataget-Slice';
function SentBody(props) {
 const email =   localStorage.getItem('email')
  const dispatch = useDispatch()
  const [sentMail,setSentMail] = useState(false)
  useEffect(()=>{
if(email === props.item.from){
  setSentMail(true)
}
  },[])
  const deleteHandler = (item)=>{
    dispatch(removingMails(item.id))
  }
  const history = useHistory()
const sentdetailHandler =()=>{
    history.replace('/welcomepage/sentmail')
    dispatch(mailActions.mailDetails({
      from:props.item.from,
      subject:props.item.subject,
      message:props.item.message,
      to:props.item.to,
      id:props.item.id,
    }))
}

  return (
    <div>
   {sentMail&& <div className='emailbody'  >
   <div className='emailbody__left'>
<CheckBoxOutlineBlankIcon/>
<StarBorderIcon/>
<LabelOutlinedIcon/>
<h4  onClick={sentdetailHandler}> To:{props.item.to} </h4>
   </div>
   <div className='emailbody__middle'>
       <div className='emailbody__middle_msg'>
           <p><b>{props.item.subject}</b>{props.item.message}</p>
       </div>
       </div>
       <div className='emailbody__right'>
       <IconButton onClick={ ()=>deleteHandler(props.item)}>
              <DeleteIcon />
            </IconButton>
       <p>{'time'}</p>
       </div>
     
   </div>}
   </div>
  )
}

export default SentBody;