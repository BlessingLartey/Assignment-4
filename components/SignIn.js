import React, { useState } from 'react'
import Todo from './Todo'





export default function SignIn(){
const [email, setEmail] =useState('')
const [password, setPassword] =useState('')
const [signin, setSignIn]=useState(false)



const handleEmailInput =(event)=>{
    setEmail(event.target.value)
}

const handlePasswordInput =(event) =>{
    setPassword(event.target.value)
}


function handleSignIn(event){
    if (email === 'bbklartey@gmail.com' && password==='anatiola') {
        setSignIn (true)
    }
}

function handleLogOut(event){
    event.preventDefault()
    setSignIn(false)
}
  return (
    <div className="App-header">
 {
            signin
            ?
            <>
            
            <button type='button' name='button' onClick={handleLogOut}>Log Out</button>
            <Todo/>
            </>
            :
            <>
            <form>
                <h1 >Sign In</h1>
                <br></br>
                <label >Email:</label>
                <input type='email' name='email' value={email} onChange={handleEmailInput}/>
                <br></br>
                <label >password:</label>
                <input  type='password' name='password' value={password} onChange={handlePasswordInput}/>
                <br></br>
                
                <button onClick={handleSignIn}>Sign In</button>
            </form>
            </>
            }    </div>
  )
}

