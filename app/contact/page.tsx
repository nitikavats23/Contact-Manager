import { getContacts } from '@/app/api/contact';
import { getSession } from '@/app/lib/session';
import React from 'react';
import ContactList from '../_components/ContactList';
import Link from 'next/link';

const ContactPage=async()=>{
    const user=await getSession();
    console.log('user details----->', user);
    if(!user){
     return(       
            <div>
                Please{""}
                <a href="/login" className="text-blue-600 hover:underline">
                login
                </a>{""}
                to view contacts
            </div>
     )
    }    
    const contacts=await getContacts(user.id);
    console.log("contacts list:",contacts);
    if(!contacts || contacts.length===0){
        return(
            <div>
                Please{""}
                <Link href="/contact/new" className="text-blue-600 hover:underline">
                Add a contact
                </Link>{""}
                to your contact list
            </div>
        )
    }return<div>
        <div className="flex justify-between items-center mb-6">
            <h1>
                Your Contacts
            </h1>
            <Link href="/contact/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add Contact</Link>
        </div>
        <ContactList contacts={contacts}/>
    </div>  
};



export default ContactPage;
    
        


    
    