import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IconPerson from '../../Assets/personPlaceHolder.png';
import SignUpButton from '../microComponents/signUpButton';
import LoginButton from '../microComponents/loginButton';

const Login = () => {
  // Login and SignUp buttons
  const [signUpState, setSignUpState] = useState(false);
  const [loginState, setLoginState] = useState(false);

  // Signup Values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Login Values
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Session status
  const [sessionActive, setSessionActive] = useState(false);

  // Fetch session status on component mount
  useEffect(() => {
    const checkSessionStatus = async () => {
      try {
        console.log('Fetching session status...');
        const response = await axios.get('http://localhost:4000/login/session-status', {
          withCredentials: true,
        });
        
        console.log('Session status data:', response.data);

        if (response.data && response.data.active) {
          setSessionActive(true);
          setLoginUsername(response.data.user.username);
        } else {
          setSessionActive(false);
        }
      } catch (error) {
        console.error('Error checking session status:', error);
      }
    };

    checkSessionStatus();
  }, []);

  // Logout function
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/logout', {}, {
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log('Session logged out');
        setSessionActive(false);
        setLoginUsername('');
        window.location.reload();
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Changing Signup button state
  const toggleSignUpState = () => {
    setSignUpState(!signUpState);
  };

  // Changing login button state
  const toggleLoginState = () => {
    setLoginState(!loginState);
  };

  return (
    <div className='mb-2'>
      {!signUpState && !loginState && !sessionActive && (
        <>
          <p className='text-center text-light-grey h-2'>__________________________________</p><br />
          <div className="rounded-2xl h-10 w-10/12 ml-5 flex items-center">
            <div className='h-10 w-10 bg-light-grey rounded-2xl'>
              <img className="rounded-2xl" src={IconPerson} alt="person" />
            </div>
            <button className="bg-custom-gradient rounded-lg ml-auto px-4 py-2 w-20" onClick={toggleLoginState}>Login</button>
            <button className="bg-custom-gradient rounded-lg ml-2 px-4 py-2 w-20" onClick={toggleSignUpState}>SignUp</button>
          </div>
        </>
      )}

      {signUpState && (
        <SignUpButton
          signUpState={signUpState}
          loginState={loginState}
          newUsername={setUsername}
          newPassword={setPassword}
          newEmail={setEmail}
          changeSignUpstate={toggleSignUpState}
          username={username}
          password={password}
          email={email}
        />
      )}

      {loginState && (
        <LoginButton
          signUpState={signUpState}
          loginState={loginState}
          newloginUsername={setLoginUsername}
          newloginPassword={setLoginPassword}
          changeLoginState={toggleLoginState}
          loginUsername={loginUsername}
          loginPassword={loginPassword}
        />
      )}

      {sessionActive && (
        <>
          <p className='text-center text-light-grey h-2'>__________________________________</p><br />
          <div className='rounded-2xl h-10 w-10/12 ml-5 flex items-center'>
            <div className='h-10 w-10 bg-light-grey rounded-2xl'>
              <img className="rounded-2xl" src={IconPerson} alt="person" />
            </div>
            <p className='ml-10' style={{ color: 'white' }}>Welcome, {loginUsername}!</p>
            <button className="bg-custom-gradient rounded-lg ml-2 px-4 py-2" onClick={handleLogout}>LogOut</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
