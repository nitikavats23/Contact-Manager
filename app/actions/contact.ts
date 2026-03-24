"use server";
import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { getSession } from "../lib/session";
import { ContactType } from "../_types/contact";
import { redirect } from "next/navigation";

export const createContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  if (!formData) {
    return { error: `Form data is missing` };
  }
  const user = await getSession();
console.log('get session user detatis----------------------------------->',user);
  if (!user?.id) return;

  const newContact: ContactType = {
    manager: String(user.id),
    id: String(Date.now()),
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    userId: Number(user.id),
  };
  try {
    await createContact(newContact);
    return { success: true };
  } catch (error) {
    console.log("error creating contact:", error);
    return { error: "failed to create contact" };
  } finally {
    redirect("/contact");
  }
};

export const updateContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const id=formData.get("id") as string;
  const user = await getSession();

  if (!user?.id) return;

  const updatedContact: ContactType = {
     manager: String(user.id),
    id: String(Date.now()),
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    userId: Number(user.id),
  };
  try {
    await updateContact(id,updatedContact);
    return { success: true };
  } catch (error) {
    console.log("error updating contact:", error);
    return { error: "failed to update contact" };
  } finally {
    redirect("/contact");
  }
};


export const deleteContactAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const id = formData.get("id") as string;
  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("error deleting contact:", error);
    return { error: "failed to delete contact" };
  }
};
