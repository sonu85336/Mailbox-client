import React, { useState, useEffect } from "react";
import "../Css/compose.css";
import "../Css/Mailbox.css";
import RemoveIcon from "@mui/icons-material/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

// import {db} from '../firebase/firebase'
// import firebase from 'firebase/compat/app'
import { useDispatch, useSelector } from "react-redux";
import { composeActions } from "../../Store/Compose-Slice";
import { addingMail } from "../../Store/Mail-actions";
import { blueticks } from "../../Store/Mail-actions";
import { mailActions } from "../../Store/Dataget-Slice";
import axios from "axios";
import { useSelect } from "@mui/base";
function Compose() {
  const counter = 0;
   
  const email = localStorage.getItem("email");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const dispatch = useDispatch();

  const showcounter = useSelector((state)=>state.mail.counter) 
   const [count, setCount] = useState(showcounter);
   const [countval,setCountVal]  =useState(10)

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState(null);


  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (to === "") {
      return alert("email is required");
    }
    if (subject === "") {
      return alert("subject is required");
    }
    const message = convertedContent.replace("<p>", "").replace("</p>", "");

    const obj = {
      to,
      subject,
      message,
      from: email,
      read: false, //timestamp:firebase.firestore.FieldValue.serverTimestamp()
    };
    dispatch(addingMail(obj));
    localStorage.setItem("obj", JSON.stringify(obj));
    // dispatch(blueticks(obj))
    setTo("");
    setSubject("");
    setConvertedContent("");
    alert("Email sent successfully");

    const notify = {
      counter: count + 1,
    };

    if (email === to) {
        axios.put(
      "https://mailbox-client-8738c-default-rtdb.firebaseio.com/notification/-NNCSrL9LnpyywOiJ4z0.json",
      notify
    );
      }
   

    setCount(count + 1);
    // setCountVal(countval - 1)
    // console.log(countval,'form email body before  minus')
    // if (email === to) {
    //   dispatch(mailActions.readMail());
    // }
  };
  //console.log(countval,'form email body after  minus')
  console.log(showcounter,'from compose counter')
  const composeclose = () => {
    dispatch(composeActions.composeHandler(false));
  };
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <OpenInFullIcon />
          <CloseIcon onClick={composeclose} />
        </div>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div className="compose__body">
          <div className="compose__bodyForm">
            <input
              type="email"
              placeholder="Reciepnets"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          </div>
        </div>
        <div className="compose__footer">
          <div className="compose__footerLeft">
            <button type="submit">
              Send
              <ArrowDropDownIcon />
            </button>
          </div>
          <div className="compose__footerRight"></div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
