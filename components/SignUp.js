import React, { useState } from 'react'
import Todo from './Todo'





export default function SignUp(){
    const [firstname, setFirstName] =useState('')
const [lastname, setLastName] =useState('')
const [email, setEmail] =useState('')
const [password, setPassword] =useState('')
const [confirmpassword, setConfirmPassword] =useState('')
const [signup, setSignUp] =useState(false)


const handleFirstNameInput =(event)=>{
    setFirstName (event.target.value)
}

const handleLastNaameInput =(event) =>{
    setLastName(event.target.value)
}

const handleEmailInput =(event)=>{
    setEmail(event.target.value)
}

const handlePasswordInput =(event) =>{
    setPassword(event.target.value)
}

const handleConfirmPasswordInput =(event)=>{
    setConfirmPassword(event.target.value)
}

function handleSignUp(event){
    if (email === 'bbklartey@gmail.com' && password==='anatiola' && confirmpassword==='anatiola') {
        setSignUp (true)
    }
}

function handleLogOut(event){
    event.preventDefault()
    setSignUp(false)
}
  return (
    <div className="App-header">
 {
            signup
            ?
            <>
            
            <Todo/>
            <button type='button' name='button' onClick={handleLogOut}>Log Out</button>

            </>
            :
            <>
            <form>
                <h1 >Creat An Accont</h1>
                <br></br>
                <label>First Name:</label>
                <input  type= 'firstname' name='firstname' value={firstname} onChange= {handleFirstNameInput}/>
                <br></br>
                <label >Last Name:</label>
                <input type='lastname' name='lastname' value={lastname} onChange={handleLastNaameInput}/>
                <br></br>
                <label >Email:</label>
                <input type='email' name='email' value={email} onChange={handleEmailInput}/>
                <br></br>
                <label >password:</label>
                <input  type='password' name='password' value={password} onChange={handlePasswordInput}/>
                <br></br>
                <label >Confirm Password:</label>
                <input  type='password' name='confirmpassword' value={confirmpassword} onChange={handleConfirmPasswordInput}/>
                <br></br>
               
                <button onClick={handleSignUp}>Sign Up</button>
            </form>
            </>
            }    </div>
  )
}

