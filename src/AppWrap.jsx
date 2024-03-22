import React from 'react'
import Navbar from './components/Navbar'
import Avatar from './components/Avatar'

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar 
          image="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVEJTk0JTg0JUVCJUExJTlDJUVEJTk1JTg0JUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww"
          name='Bob'
          size={200}
        />
      </Navbar>
      
      <Navbar>
        <p>안녕~</p>
      </Navbar>
    </div>
  )
}
