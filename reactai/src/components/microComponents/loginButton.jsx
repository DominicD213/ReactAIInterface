import React from 'react'
import { useState } from 'react';

const LoginButton = ({signUpState, loginState ,newloginUsername , newloginPassword, changeLoginState,
    loginUsername, loginPassword}) => {
    
    const [error, setError] = useState('')
        //Handling the login get request
  const handleLogin = (e) =>{
    e.preventDefault();

    if(!loginUsername || !loginPassword){
        setError(<p className='pr-2 pb-1 ' style={{ color: 'red' }}>Fill Out Login Info</p>);
        console.log(loginUsername + ' ' + loginPassword)
    }else{
        setError('');
        changeLoginState();
    }
  }
  return (
    <div>{!signUpState && loginState && (
        <>
          <p className='text-center text-light-grey h-2'>__________________________________</p>
          <br />
          <div className='relative ml-8 w-10/12 h-full bg-light-grey rounded-2xl'>
            <div className='m-3'>
              <p className='font-bold pt-1' style={{ color: 'white' }}>Login</p>
              <form>
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1'
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={loginUsername}
                  onChange={(e) => {newloginUsername(e.target.value)}}
                  style={{ color: 'white' }}
                />
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1 pb-2'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={loginPassword}
                  onChange={(e) =>{newloginPassword(e.target.value)}}
                  style={{ color: 'white' }}
                />
                <button
                  className="bg-custom-gradient rounded-lg px-4 py-2 w-20 absolute bottom-3 right-3"
                  type='submit'
                  onClick={handleLogin}
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

export default LoginButton