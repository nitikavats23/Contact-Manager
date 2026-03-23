"use client";
import React from 'react';
import { logoutAction } from '../actions/auth';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

const LogoutButton=()=>{
    const router=useRouter();
    const handlelogout=async()=>{
        try{
            await logoutAction();
            //the redirect happens in the server action
            //this client-side redirect is a fallback
            router.push("/login")
            router.refresh();
        }catch(error){
            console.log("Logout failed",error);
        }
        
        }
    return(
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={handlelogout}>Logout</button>
    )
};

export default LogoutButton;