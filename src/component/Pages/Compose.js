import React, { useState,useEffect } from 'react'
 import '../Css/compose.css'
 import '../Css/Mailbox.css'
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

  import { EditorState } from 'draft-js';
 import { Editor } from 'react-draft-wysiwyg';
 import { convertToHTML } from 'draft-convert';
 
// import {db} from '../firebase/firebase'
// import firebase from 'firebase/compat/app'
import { useDispatch } from 'react-redux';
import { composeActions } from '../../Store/Compose-Slice';
import { addingMail } from '../../Store/Mail-actions';
function Compose() {
    const email= localStorage.getItem('email')
    const [to,setTo] = useState('')
    const [subject,setSubject] = useState('')
     const dispatch = useDispatch()

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      const [convertedContent,setConvertedContent]=useState(null)
      useEffect(()=>{
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html)
        
      },[editorState])


     const formSubmitHandler = (e)=>{
        e.preventDefault()
        if(to===''){
            return alert('email is required')
        }if(subject===''){
            return alert('subject is required')
        }
        const message =  convertedContent.replace('<p>',"").replace('</p>','') 
  

       const obj =  {
                to,
                subject,
                message,
                from:email,
                //timestamp:firebase.firestore.FieldValue.serverTimestamp()
            }
            dispatch(addingMail(obj))
        setTo('')
        setSubject('')
        setConvertedContent('')
        alert('Email sent successfully')
   
     } 
  const composeclose = ()=>{
    dispatch(composeActions.composeHandler(false))
  }
  return (
    <div className='compose'>
    <div className='compose__header'>
        <div className='compose__header__left'>
            <span>New Message</span>
        </div>
        <div className='compose__header__right'>
<RemoveIcon/>
<OpenInFullIcon/>
<CloseIcon  onClick={composeclose} />
        </div>
    </div>
    <form   onSubmit={formSubmitHandler }>
<div className='compose__body'>
    <div className='compose__bodyForm'>
        <input type="email"
        placeholder='Reciepnets' value={to}  onChange={(e)=>setTo(e.target.value)}/>
        <input type="text"  placeholder="Subject" 
         value={subject} onChange={(e)=>setSubject(e.target.value)}/>
 <Editor
  editorState={editorState}
  onEditorStateChange={setEditorState}
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"

        />
    </div>
</div>
<div className='compose__footer'>
<div className='compose__footerLeft'>
    <button type="submit">Send<ArrowDropDownIcon/></button>
</div>
 <div className='compose__footerRight'>
   
</div> 
</div>
</form>      
    </div>
  )
}

export default Compose
