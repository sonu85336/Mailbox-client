import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../Css/emaillist.css";

import SentBody from "./SentBody";
import SentListSetting from "./SentListSetting";

function SentList() {
  const email = localStorage.getItem("emial");
const showmail = useSelector((state)=>state.mail.mailitems)
  

  

  return (
    <div>
      <SentListSetting />
{showmail.map((item)=>(
  <SentBody id={item.id}
    key= {item.id}
    item = {item}
  />
))}
      
    </div>
  );
}

export default SentList;
