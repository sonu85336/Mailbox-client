import React from 'react'
 import '../../Css/emaillist.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useHistory } from 'react-router-dom';
 import { useDispatch } from 'react-redux';
 import { useSelector } from 'react-redux';
 

function SentBody() {
   const dispatch = useDispatch()
  
  return (
    <div className='emailbody'  >
    <div className='emailbody__left'>
<CheckBoxOutlineBlankIcon/>
<StarBorderIcon/>
<LabelOutlinedIcon/>
<h4> {'email'} </h4>
    </div>
    <div className='emailbody__middle'>
        <div className='emailbody__middle_msg'>
            <p><b>{'subject'}</b>{'message'}</p>
        </div>
        </div>
        <div className='emailbody__right'>
        <p>{'time'}</p>
        </div>
      
    </div>
  )
}

export default SentBody;