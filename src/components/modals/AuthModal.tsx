import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5';
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';

type AuthModalProps = {}

const AuthModal = (props: AuthModalProps) => {
    const authModal = useRecoilValue(authModalState);
    const closeModal = useCloseModal();
    
  return (
    <div>
        <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
           
           <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange
                to-slate-900 mx-6'>
                    <div className='flex justify-end p-2'>
                        <button type='button' 
                                className='bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800
                         hover:text-white text-white' onClick={closeModal}>
                          <IoClose className='h-5 w-5'/>
                         </button>
                    </div>
                   {authModal.type === 'login' ? <Login/> : authModal.type === 'register'? <Signup/> : <ResetPassword/>}
                </div>
           </div>
        </div>

    </div>
    );
};

export default AuthModal;

function useCloseModal(){
    const setAuthModal = useSetRecoilState(authModalState);
    const [_,setAuthModal2] = useRecoilState(authModalState);
    const closeModal = () => {
        setAuthModal((prev) => ({...prev, isOpen: false,type: "login"}));
        //setAuthModal2((prev) => ({...prev, isOpen: false,type: "login"}));
    }

    useEffect(() => {

        const handleEscape = (e: KeyboardEvent)=>{
            if(e.key === "Escape"){
                closeModal();
            }
        }
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown",handleEscape);
    }, []);

    return closeModal;
}