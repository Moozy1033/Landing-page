"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Page = () => {
  const router = useRouter()
  
  // Success Toast
const showSuccessToast = (message) => {
  toast.success(message);
};

// Error Toast
const showErrorToast = (message) => {
  toast.error(message);
};
    const [formData, setformData] = useState({firstname: '', lastname: '', email: '', password: ''})
    const handleChange = (e)=>{
        setformData({...formData, [e.target.name]: e.target.value})
    }
    const submit = (e)=>{
        e.preventDefault()
        const {firstname, lastname, email, password} = formData

        if (!firstname || !lastname || !email || !password) {
            showErrorToast('Fill in the empty fields')
            return
        } else{
            const newUser = {firstname, lastname, email, password}
            console.log("submitted", newUser);

            localStorage.setItem("UserInfo", JSON.stringify(newUser))
            console.log(localStorage);
            setformData({firstname: '', lastname: '', email: '', password: ''})
            showSuccessToast('Signed Up Successfully')
            setTimeout(() => {
              router.push("/signin")
            }, 2000);
        }
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white  border border-white/20 shadow p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-blue-500 text-2xl font-bold text-center mb-4">Sign Up</h2>
        
        <ToastContainer position='top-right' autoClose={3000}/>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="First Name" name='firstname' onChange={handleChange} value={formData.firstname} className="p-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Last Name" name='lastname' onChange={handleChange} value={formData.lastname} className="p-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:border-blue-500" />
          <input type="email" placeholder="Email" name='email' onChange={handleChange} value={formData.email} className="p-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:border-blue-500" />
          <input type="password" placeholder="Password" name='password' onChange={handleChange} value={formData.password} className="p-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:border-blue-500" />
          
          <button onClick={submit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition">
            Register
          </button>
        </form>

        <p className="text-black text-sm text-center mt-4">
          Already have an account? <Link href="/signin" className="text-blue-400 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Page