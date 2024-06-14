import React from 'react'
import IconPerson from '../../Assets/personPlaceHolder.png'
import { useState } from 'react'
import SignUpButton from '../microComponents/signUpButton';
import LoginButton from '../microComponents/loginButton';
import axios from 'axios';

const Login = () => {

  //Login and SignUp buttons
  const [signUpState, newSignUpState] = useState(false);
  const [loginState, newLoginState] = useState(false);

  //Singup Values
  const [username , newUsername] = useState('');
  const [password , newPassword] = useState('');
  const [email , newEmail] = useState('');

  //Login Values
  const [loginUsername,  newloginUsername] = useState('');
  const [loginPassword,  newloginPassword] = useState('');
  
  //Changing Singup button State
  const changeSignUpState = () => {
    newSignUpState(!signUpState);
  };

  //changin login button state
  const changeLoginState = () => {
    newLoginState(!loginState);
  };


  return (
    <div className='mb-2'>
      {!signUpState && !loginState &&(
        <>
          <p className = 'text-center text-light-grey h-2'>__________________________________</p><br/>
          <div className="rounded-2xl h-10 w-10/12 ml-8 flex items-center">
            <div className='h-10 w-10 bg-light-grey rounded-2xl'>
              <img className="rounded-2xl" src={IconPerson} alt="person" />
            </div>
            <button className="bg-custom-gradient rounded-lg ml-auto px-4 py-2 w-20" onClick={changeLoginState}>Login</button>
            <button className="bg-custom-gradient rounded-lg ml-2 px-4 py-2 w-20" onClick={changeSignUpState}>SignUp</button>   
          </div>
        </>
        )} 
      <SignUpButton signUpState = {signUpState} loginState = {loginState}  
        newUsername = {newUsername} newPassword = {newPassword} newEmail = {newEmail} 
        changeSignUpstate ={changeSignUpState}
        username = {username} password = {password} email = {email}/>
      <LoginButton  signUpState = {signUpState} loginState = {loginState} 
        newloginUsername={newloginUsername} newloginPassword={newloginPassword} 
        changeLoginState = {changeLoginState}loginUsername = {loginUsername} 
        loginPassword = {loginPassword}/>
    </div>
  )
}

export default Login