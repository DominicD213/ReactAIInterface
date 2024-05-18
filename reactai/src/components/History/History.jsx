import React from 'react';
import Search from '../../Assets/whiteSearchIcon.png';

const History = () => {
  return (
    <div>
      <div className='ml-10'>
        <h1 className='font-bold' style={{ color: 'white' }}>History</h1>
        <form>
          <div className='bg-light-grey rounded-lg mt-2 w-11/12 h-10 flex items-center'>
            <button className='h-full px-3' type='submit'>
              <img className='h-5 w-5' src={Search} alt='search' />
            </button>
            <input
              className='flex h-full bg-light-grey outline-none px-2 text-white'
              type='text'
              placeholder='Search history'
              style={{ color: 'white' }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default History;
