"use server";

import { redirect } from "next/navigation";
import axios from "axios";
import { UserType } from "../_types/user";
import { setSession, deleteSession } from "../lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try {
  const email = String(formData.get("email")).trim();
const password = String(formData.get("password")).trim();
console.log('---------------------------->', email, password)
    if (!email || !password) {
      throw new Error("Missing credentials");
    }

    console.log('url---->',  `${API_URL}/users?email=${email}&password=${password}`);
    const response = await axios.get(
      `${API_URL}/users?email=${email}&password=${password}`
    );

    console.log("API response:", response.data);

    const user: UserType | undefined = response.data[0];

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    await setSession(user);

    console.log("✅ Session set");

   

  } catch (error) {
    console.error("❌ Login error:", error);
    // throw new Error("Invalid email or password");
  }finally{
     redirect("/contact");
  }
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};