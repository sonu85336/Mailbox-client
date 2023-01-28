import React from 'react'
import './css/emaillist.css'
import EmailBody from './EmailBody'
import EmailListSetting from './EmailListSetting'
import Emailtype from './Emailtype'
function EmailList() {
  return (
    <div>
      <EmailListSetting/>
      <Emailtype/>
      <EmailBody name="Sonu" subject="This is Subject1" message="we are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react jswe are learnig react js" time="03:20 PM"/>
    </div>
  )
}

export default EmailList
