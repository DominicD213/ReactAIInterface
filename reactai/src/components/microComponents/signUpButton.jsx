import React from 'react'
import { useState } from 'react';

const SignUpButton = ({signUpState, loginState ,newUsername ,newPassword, newEmail, 
    changeSignUpstate, username, password, email}) => {

    const [error, setError] = useState('')

    //Handling the signup post request
    const handleSignUp = (e) =>{
        e.preventDefault();

        if(!username || !password || !email){
            setError(<p className='pr-2 pb-1 mr-2 ' style={{ color: 'red' }}>Fill Out SignUp Info</p>);
            console.log(username + ' ' + password + ' ' + email)
        }else{
            setError('');
            changeSignUpstate();
        }
    }
  return (
    <div>
        {signUpState && !loginState && (
        <>
          <p className='text-center text-light-grey h-2'>__________________________________</p>
          <br />
          <div className='relative ml-8 w-10/12 h-full bg-light-grey rounded-2xl'>
            <div className='m-3'>
              <p className='font-bold pt-1' style={{ color: 'white' }}>Sign Up</p>
              <form id = 'signUp'>
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1'
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={(e) => {newUsername(e.target.value)}}
                  style={{ color: 'white' }}
                />
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => {newPassword(e.target.value)}}
                  style={{ color: 'white' }}
                />
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1 pb-2'
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={(e) => {newEmail(e.target.value)}}
                  style={{ color: 'white' }}
                />
                <button
                  className="bg-custom-gradient rounded-lg px-4 py-2 w-20 absolute bottom-3 right-3"
                  type='submit'
                  onClick={handleSignUp}
                >
                  Submit
                </button>
                {error}
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SignUpButton