import ContactForm from '@/app/_components/ContactForm';
import { updateContactAction } from '@/app/actions/contact';
import { getContactById } from '@/app/api/contact';
import React from 'react';

const EditContactPage=async({params}:{params: Promise<{id:string}>})=>{
    const {id}=await params;
    const contact=await getContactById(id);
    return(
        
    <div className="max-wd mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl fontbold mb-6">Edit contact</h1>
        <ContactForm action={updateContactAction } contact={contact}/>

    </div>
    

    )
}

export default EditContactPage;