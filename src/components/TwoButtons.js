import React from 'react';

function TwoButtons({ text1, text2, func1, func2, h1, h2 }) {
  return (
    <div className='gap-5 flex justify-center items-center h-[70px] w-[400px]'>
      
   
      {text1 && (
        <button 
          onClick={func1 || undefined} 
          className='tracking-[5px] rounded-[12px] text-black h-[50px] w-[50%]'
          style={{ backgroundColor: h1 || 'white' }}
        >
          {text1}
        </button>
      )}

 
      {text2 && (
        <button 
          onClick={func2 || undefined} 
          className='tracking-[5px] text-white rounded-[12px] h-[50px] w-[50%]'
          style={{ backgroundColor: h2 || '#1E1E1E' }}
        >
          {text2}
        </button>
      )}
    </div>
  );
}

export default TwoButtons;
