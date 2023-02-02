import React, { useEffect } from "react";
import "../../Css/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../../Store/Dataget-Slice";
import DeleteIcon from "@mui/icons-material/Delete";
import { blueticks, removingMails } from "../../../Store/Mail-actions";
import axios from "axios";
import { composeActions } from "../../../Store/Compose-Slice";
function EmailBody(props) {
   
  const history = useHistory();
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const [emailshow, setEmailshow] = useState(false);
  const [showbluetic, setShowBlueTick] = useState(null);
  const showmail = useSelector((state) => state.mail.mailitems);
  const showcounter = useSelector((state) => state.mail.counter);
  const [countval, setCountVal] = useState(showcounter);
 
  useEffect(() => {
    if (props.item.to === email) {
      setEmailshow(true);
    }
  }, []);

  const obj = {
    from: props.item.from,
    subject: props.item.subject,
    message: props.item.message,
    to: props.item.to,
    read: true,
  };
  const not = {
    counter:countval,
  };

  const mailboxHandler = () => {
    dispatch(
      mailActions.mailDetails({
        from: props.item.from,
        subject: props.item.subject,
        message: props.item.message,
        to: props.item.to,
      })
    );

    if (props.item.read === false) {
      axios.put(
        'https://mailbox-client-8738c-default-rtdb.firebaseio.com/notification/-NNH9mIBXdyG8JHFuvHq.json',
        not
      );
      setCountVal(countval - 1)
    }
 console.log(countval)
    dispatch(blueticks(props.item.id, obj));
    setShowBlueTick(props.item.read);

    dispatch(composeActions.mailpageHandler(true));
  };

  useEffect(() => {
    setShowBlueTick(props.item.read);
  }, []);

  const deleteHandler = (item) => {
    dispatch(removingMails(item.id));
  };

  return (
    <div>
      {emailshow && (
        <div className="emailbody">
          <div className="emailbody__left">
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            {/* <LabelOutlinedIcon/> */}

            {!showbluetic && (
              <FiberManualRecordIcon style={{ color: "blue" }} />
            )}
            <h4 onClick={mailboxHandler}>{props.item.from}</h4>
          </div>
          <div className="emailbody__middle">
            <div className="emailbody__middle_msg">
              <p>
                <b>{props.item.subject}</b>
                {props.item.message}
              </p>
            </div>
          </div>

          <div className="emailbody__right">
            <IconButton onClick={() => deleteHandler(props.item)}>
              <DeleteIcon />
            </IconButton>
            <p>3:30 PM</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailBody;
