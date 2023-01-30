import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../Css/emaillist.css'
 
//  import { db } from '../../firebase/firebase'
 
import SentBody from './SentBody'
import SentListSetting from './SentListSetting'
 
function SentList() {
const email = localStorage.getItem('emial')
//  const  userdata = useSelector((state)=>state.dataget.items)
//   console.log(userdata,'from sentlist')
const [emails,setEmails]= useState([])
// useEffect(()=>{

 
//   db.collection(email).orderBy('timestamp','desc').onSnapshot(snapshot=>{
//     setEmails(snapshot.docs.map(doc=>({
//       id:doc.id,
//       data:doc.data(),
//     })))
//   })
// },[]) 
console.log(emails)
  


  return (
    <div>
       
      <SentListSetting/>
      
  <SentBody/>
   
    
        
    
     
    </div>
  )
}

export default SentList;
