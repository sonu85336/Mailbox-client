import React from 'react'
import './css/sidebaroption.css'
function SidebarOption({Icon,title,number,isactive}) {
  return (
    <div className={`sidebarOptions ${isactive && 'sidebarOptions--active'}`}>
    <Icon></Icon>
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption
