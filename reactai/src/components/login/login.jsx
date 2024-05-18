import React from 'react'
import IconPerson from '../../Assets/personPlaceHolder.png'
import { useState } from 'react'

const Login = () => {

  const [signUpState, newSignUpState] = useState(false);
  const [loginState, newLoginState] = useState(false);
  
  const changeSignUpstate = () => {
    if (signUpState === false){
      newSignUpState(true)
    }
    else{
      newSignUpState(false)
    }
  }

  const changeLoginUpstate = () => {
    if (loginState === false){
      newLoginState(true)
    }
    else{
      newLoginState(false)
    }
  }

  return (
    <div className='mb-2'>
      {!signUpState && !loginState &&(
        <>
          <p className = 'text-center text-light-grey h-2'>__________________________________</p><br/>
          <div className="rounded-2xl h-10 w-10/12 ml-8 flex items-center">
            <div className='h-10 w-10 bg-light-grey rounded-2xl'>
              <img className="rounded-2xl" src={IconPerson} alt="person" />
            </div>
            <button className="bg-custom-gradient rounded-lg ml-auto px-4 py-2 w-20" onClick={changeLoginUpstate}>Login</button>
            <button className="bg-custom-gradient rounded-lg ml-2 px-4 py-2 w-20" onClick={changeSignUpstate}>SignUp</button>   
          </div>
        </>
        )} 
      {signUpState && !loginState && (
        <>
          <p className='text-center text-light-grey h-2'>__________________________________</p>
          <br />
          <div className='relative ml-8 w-10/12 h-full bg-light-grey rounded-2xl'>
            <div className='m-3'>
              <p className='font-bold pt-1' style={{ color: 'white' }}>Sign Up</p>
              <form>
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1'
                  type='text'
                  placeholder='Username'
                  style={{ color: 'white' }}
                />
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1'
                  type='password'
                  placeholder='Password'
                  style={{ color: 'white' }}
                />
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1 pb-2'
                  type='email'
                  placeholder='Email'
                  style={{ color: 'white' }}
                />
                <button
                  className="bg-custom-gradient rounded-lg px-4 py-2 w-20 absolute bottom-3 right-3"
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
      {!signUpState && loginState && (
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
                  style={{ color: 'white' }}
                />
                <input
                  className='flex h-full bg-light-grey outline-none px-2 text-white m-1 pb-2'
                  type='password'
                  placeholder='Password'
                  style={{ color: 'white' }}
                />
                <button
                  className="bg-custom-gradient rounded-lg px-4 py-2 w-20 absolute bottom-3 right-3"
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Login