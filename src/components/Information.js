import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTimes } from 'react-icons/fa';

function Information({setInfoModal}) {
    

    const handleClose = () => {
        setInfoModal(false);
    };

  

    return (
        <div className='font-market fixed inset-0 z-[50] grid place-items-center overflow-auto'>
            <div className='relative bg-[#1E1E1E] p-6 flex flex-col items-center gap-5 border-4 w-[500px] h-auto rounded-[12px]'>
                
               
                <button onClick={handleClose} className='absolute top-3 right-3 text-white hover:text-gray-400'>
                    <FaTimes size={20} />
                </button>

     
                <h2 className='text-white text-2xl font-bold'>About Us</h2>
                <p className='text-gray-300 text-center'>
                    We provide AI-based services that allow you to generate images, add them to your collections, store, share, and download them effortlessly.
                </p>

               
                <div className='h-[1px] w-full bg-gray-500 my-2'></div>

            
                <h2 className='text-white text-2xl font-bold'>Contact Us</h2>
                <div className='flex flex-col items-center gap-2 text-gray-300'>
                    <div className='flex items-center gap-2'>
                        <FaEnvelope />
                        <span>skumarnaveen1442@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/naveen-kumar-2aa920221/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
