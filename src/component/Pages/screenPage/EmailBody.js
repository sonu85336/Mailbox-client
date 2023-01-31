import React, { useEffect } from "react";
import "../../Css/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { mailActions } from "../../../Store/Dataget-Slice";
import DeleteIcon from "@mui/icons-material/Delete";
import { removingMails } from "../../../Store/Mail-actions";
function EmailBody(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const [emailshow, setEmailshow] = useState(false);
  const [showbluetic, setShowBlueTick] = useState(true);
  useEffect(() => {
    if (props.item.to === email) {
      setEmailshow(true);
    }
  }, []);

  const mailboxHandler = () => {
    history.replace("/welcomepage/mailpage");
    dispatch(
      mailActions.mailDetails({
        from: props.item.from,
        subject: props.item.subject,
        message: props.item.message,
      })
    );
    setShowBlueTick(false);
    console.log("deleete");
  };

  const deleteHandler = (item)=>{
    dispatch(removingMails(item.id))
  }
  return (
    <div>
      {emailshow && (
        <div className="emailbody" >
          <div className="emailbody__left">
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            {/* <LabelOutlinedIcon/> */}

            {showbluetic && <FiberManualRecordIcon style={{ color: "blue" }} />}
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
            <IconButton onClick={ ()=>deleteHandler(props.item)}>
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
