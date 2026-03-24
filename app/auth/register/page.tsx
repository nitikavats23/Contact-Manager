"use client";

import { registerAction } from "@/app/actions/auth";
import { useRouter } from "next/navigation"; 
import { useActionState, useEffect } from "react";


const RegisterPage = () => {
  const [state, formAction] = useActionState(registerAction, null);
   const router = useRouter(); 

  useEffect(() => {
    
  if (state?.success) {
    router.push("/_components/ContactForm");
  }
}, [state,router]);

  return (
    <form action={formAction} className="p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-mg">
            <h1 className="text-2xl font-bold mb-6">Register</h1>
      <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm " />
        </div>
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
            className='mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400'>Register</button>
            
            
        </div>

      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.success && <p className="text-green-500">{state.success}</p>}

      
      </div>
    </form>
  );
};

export default RegisterPage;