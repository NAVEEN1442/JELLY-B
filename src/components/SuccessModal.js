import React from 'react';
import TwoButtons from './TwoButtons';
import { useNavigate } from 'react-router-dom';

function SuccessModal({ setSuccessModal,title }) {
    const navigate = useNavigate();

    const removeModal = () => {
                
        navigate(0); 
        setSuccessModal(false);

    };

    return (
        <div className='font-market fixed inset-1 z-[50] grid place-items-center !mt-0 overflow-auto'>
            <div className='bg-[#1E1E1E] p-2 flex flex-col items-center justify-between gap-3 border-4 w-[500px] h-[300px] rounded-[12px]'>
                <p className='flex text-center tracking-[3px] flex-col text-[20px] text-[#e9e93a] items-center justify-center h-[50%] w-[90%]'>
                    {title}
                </p>
                <TwoButtons func1={removeModal} text1={"CLOSE"} />
            </div>
        </div>
    );
}

export default SuccessModal;
