"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PortalBeritaPage = () => {
   const [posts, setPosts] = useState([]);
   const [form, setForm] = useState({
    title:'',
    slug:'',
    body:'',
    author:'',
    published:false,
    gambar:null,
   });
   const [editSlug, setEditSlug] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);

   //fetch posts
   const fetchPosts = async () =>{
    const res = await fetch('/api/post');
    const data = await res.json();
    if(data.ok) setPosts(data.data);
   };
   useEffect(()=>{
    fetchPosts();
   },[]);

   return (
    <div className="w-full">
        <h1 className="w-full text-center text-2xl font-bold p-2">Portal Berita</h1>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-[80%] p-5 mt-5 sm:mt-0">
            {posts.map((post:any)=>(
                <div 
                    className="list-shadow bg-white w-full sm:w-[30%]"
                    key={post._id}>
                    {post.gambar && (
                    <Image 
                        src={post.gambar}
                        alt="upload"
                        width={100}
                        height={100}
                        className="w-full h-[200px] object-cover"
                    />
                    )}
                    <div className="">
                        <h2 className="text-xl font-bold p-2">{post.title}</h2>
                        <Link href={`/portalberita/${post.slug}`} className="text-blue-500 hover:underline p-2">
                        Read More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
   )
}

export default PortalBeritaPage;