"use client"
import React from 'react';
import { loginAction } from '../actions/auth';

const LoginForm=()=>{
    return(
        <form action={loginAction} className="space-x-4">
        <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm " />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm " />
        </div>
        <div>
            <button type="submit"
            className='mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400'>Login</button>
            
            
        </div>
        </form>
    )
};

export default LoginForm;