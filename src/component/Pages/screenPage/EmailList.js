
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../Css/emaillist.css'
import EmailBody from './EmailBody'
import EmailListSetting from './EmailListSetting'
import Emailtype from './Emailtype'
 
function EmailList() {

 const showmail = useSelector((state)=>state.mail.mailitems)
  console.log(showmail)
 
  return (
    <div>
      <EmailListSetting/>
      <Emailtype/>
      {showmail.map((item)=>(
<EmailBody 
      id={item.id}
      key={item.id}
      item={item}

/>

      ))}
        
    
     
    </div>
  )
}

export default EmailList
