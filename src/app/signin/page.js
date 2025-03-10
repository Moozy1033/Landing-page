"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Page = () => {
    // Success Toast
    const showSuccessToast = (message) => {
        toast.success(message);
    };

    // Error Toast
    const showErrorToast = (message) => {
        toast.error(message);
    };
    const [loginData, setLoginData] = useState({ email: '', password: '' })

    // Handle change
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    // submit 
    const submit = (e) => {
        e.preventDefault()
        const storedUser = JSON.parse(localStorage.getItem('UserInfo'))
        const { email, password } = storedUser
        // console.log(storedUser);

        if (!loginData.email || !loginData.password) {
            showErrorToast("Fill out the inputs")
            return
        }
        if (email !== loginData.email || password !== loginData.password) {
            showErrorToast('Incorrect information')
            return
        } else {
            console.log("signed in successfully");
            showSuccessToast('Signed in successfully')
        }

    }
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="bg-white  border border-white/20 shadow p-8 rounded-2xl w-full max-w-md">
                    <h2 className="text-blue-500 text-2xl font-bold text-center mb-4">Sign In</h2>

                    <ToastContainer position='top-right' autoClose={3000} />
                    <form className="flex flex-col gap-4">
                        <input type="email" placeholder="Email" name='email' onChange={handleChange} value={loginData.email} className="p-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:border-blue-500" />
                        <input type="password" placeholder="Password" name='password' onChange={handleChange} value={loginData.password} className="p-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:border-blue-500" />
                        <button onClick={submit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition">
                            Register
                        </button>
                    </form>

                    <p className="text-black text-sm text-center mt-4">
                        Don't have an account? <Link href="/signup" className="text-blue-400 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page