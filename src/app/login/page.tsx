"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const router = useRouter();

    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();

        const res = await fetch("api/auth/login", {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({email, password}),
        });

        const data = await res.json();
        if(res.ok){
            localStorage.setItem("token", data.token);
            router.push("/dashboard");
        }
    };

    return(
        <div className="container-login font-sans flex justify-center items-center h-[100vh] bg-gray-100">
            <form action="" onSubmit={handleSubmit} className="bg-white p-10 shadow-md w-1/2 flex flex-col gap-[20px]">
                <h2 className="w-full">Login</h2>
                <ul className="w-full flex flex-col gap-[20px] justify-center items-center">
                    <li className="h-[30px] w-full flex">
                        <label htmlFor="email" className="w-[100px]">Email</label>
                        <input 
                            className="p-5"
                            type="email"
                            placeholder="Email"
                            value = {email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required />
                    </li>
                    <li className="h-[30px] w-full flex">
                        <label htmlFor="password" className="w-[100px]">Password</label>
                        <input 
                            className="p-5"
                            type="password" name="" id="" 
                            placeholder="Kata sandi"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            required/>
                    </li>
                    <li className="h-[30px] w-full">
                        <button type="submit" className="bg-blue-500 text-gray-100 px-10 py-1 rounded-sm">Login</button>
                    </li>
                </ul>
            </form>
        </div>
        
    )
}