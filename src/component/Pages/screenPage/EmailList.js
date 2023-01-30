import React, { useEffect, useState } from 'react'
import '../../Css/emaillist.css'
import EmailBody from './EmailBody'
import EmailListSetting from './EmailListSetting'
import Emailtype from './Emailtype'
 
function EmailList() {

 
  
  
  return (
    <div>
      <EmailListSetting/>
      <Emailtype/>
      
        <EmailBody/>
    
     
    </div>
  )
}

export default EmailList
