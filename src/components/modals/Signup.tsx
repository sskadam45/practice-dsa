import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type SignupProps = {}

  const Signup = (props: SignupProps) => {
    const [_, setAuthModalState] = useRecoilState(authModalState);
    const handleClick = (type: "login" | "register" | "forgetPassord" )=>{
    setAuthModalState((prev)=> ({...prev,type: type}));
  }
  
  const [inputs, setInputs] = useState({email: '', displayName: '', password: ''});
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setInputs((prev) => ({...prev,[e.target.name]: e.target.value}));
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>)=>{
    if(!inputs.email || !inputs.displayName || !inputs.password ) alert("please fill all the fields")
    e.preventDefault();
    console.log(inputs);
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password);
      if(!newUser) return;
      router.push('/');
    } catch (error: any) {
      toast.error(error.message, {position: "top-center", autoClose: 3000, theme: "dark"});
    }
  }

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if(error) toast.error(error.message, {position: "top-center", autoClose: 3000, theme: "dark"});
  },[error]);

  return (
        <form className='space-y-6 px-6 py-4' onSubmit={handleRegister}>
        <h3 className='text-xl font-medium text-white'>Register to DSA</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Email</label>
            <input
            onChange={handleChangeInput} type="email" name="email" id="email" className='border-2 outline-none sm:text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' 
            placeholder='enter your email'
            />
        </div>

        <div>
            <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300'>Display Name</label>
            <input
            onChange={handleChangeInput} type="displayName" name="displayName" id="displayName" className='border-2 outline-none sm:text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' 
            placeholder='enter your display name'
            />
        </div>

        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Password</label>
            <input 
            onChange={handleChangeInput} type="password" name="password" id="password" className='border-2 outline-none sm:text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' 
            placeholder='enter your password'
            />
        </div>

        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s' 
        > { loading ? 'Signing Up...': 'Sign Up' } </button>
        
       
        <div className='text-sm font-medium text-gray-300'>
           Already have an account?
            <a href="#" className='text-blue-500 hover:underline px-3' onClick={() => handleClick("login")}> Log In </a>
        </div>
    </form>
  )
}

export default Signup