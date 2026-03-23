"use server"
import { revalidatePath } from "next/cache";
import { createContact, deleteContact } from "../api/contact";
import { getSession } from "../lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction=async(
    prevState:unknown,
    formData:FormData)=>{
        if(!formData){
            return{error:`Form data is missing`};

        }
        const user=await getSession();

        if (!user?.id) return;

        const newContact:ContactType ={
            id: Date.now(),
            name:String(formData.get("name")),
            email:String(formData.get("email")),
            userId: user.id, 
        }
        try{
        await createContact(newContact);
        revalidatePath("/contact");
        return{success:true};

       }
        catch(error){
        console.log("error deleting contact:",error);
        return{error:"failed to delete contact"};


    

    }};

    
export const updateContactAction=async(
    prevState:unknown,
    formData:FormData)=>{};

export const deleteContactAction=async(
    prevState:unknown,
    formData:FormData)=>{
    const id=formData.get("id") as string;
    try{
        await deleteContact(id);
        revalidatePath("/contact");
        return{success:true};
    }
    catch(error){
        console.log("error deleting contact:",error);
        return{error:"failed to delete contact"};

    }

};