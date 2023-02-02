import { ContentState } from "draft-js";
import { Fragment, useEffect } from "react";
import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../Css/Mailbox.css'
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import classes from '../Css/Mailboxformcontrol.module.css'
const Mailbox = () => {
  const [to,setTo] =useState('')
  const [subject,setSubject]= useState('')
  const [input,setInput] = useState([])
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      const [convertedContent,setConvertedContent]=useState(null)
      useEffect(()=>{
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html)
        //console.log(html,'from mailbox obj')
      },[editorState])
  
      

    //   function createMarkup(html){
    //     return{
    //         __html:DOMPurify.sanitize(html)
    //     }
     // }
     /*********************** */
     const toHandler =(e)=>{
      setTo(e.target.value)
      console.log(e.target.value)
     }
     const subjectHandler = (e)=>{
      console.log(e.target.value)
      setSubject( e.target.value)
     }
     const submitHandler = (event)=>{
      event.preventDefault() 
      const j=    convertedContent.replace('<p>',"").replace('</p>',"")
      const obj  = {
to:to,
subject:subject,
html:convertedContent,
 
      }
        console.log(j)
      console.log(obj)
     }
   
   
  return (
    <Fragment> 
        <div className={classes.mailbox} >
      {/* <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={to} onChange={toHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter Subject" value={subject} onChange={subjectHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>message</Form.Label>
          <div>
         {/* <Editor
  editorState={editorState}
  onEditorStateChange={setEditorState}
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"

        /></div> */}
         
      {/*&  </Form.Group>
        <Button>Send</Button>
      </Form> */}
     {/* <div  className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>  */}
     <form onSubmit={submitHandler}>
      <input type='text' value={to} onChange={toHandler}></input>
      <input type='text' value={subject} onChange={subjectHandler}></input>
      <Editor
  editorState={editorState}
  onEditorStateChange={setEditorState}
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"

        />
      <button>submit</button>
     </form>
    </div>
    </Fragment>
  );
};
export default Mailbox;
