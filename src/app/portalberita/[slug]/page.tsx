"use client";

import {useState, useEffect, use} from 'react';
import Link from 'next/link';
import Image from 'next/image'

type PostType = {
    title: string;
    slug: string;
    body: string;
    gambar?: string;
    author: string;
    published: boolean;
}
export default function DetailPost(
    {
        params,
    }: {
        params: Promise<{ slug:string }>
    }
) {
    const [post, setPost] = useState<PostType | null>(null);
    const {slug} = use(params);

    useEffect(()=> {
        fetch(`/api/post/${slug}`)
        .then((res)=> res.json())
        .then((data) => {
            if(data.ok) setPost(data.data);
        });
    }, [slug]);

    if(!post) return <p>Loading...</p>;

    return (
        <div className='w-full sm:w-1/2 mx-auto flex flex-col gap-[10px] px-2 mt-5 sm:mt-0'>
            <Link href="/portalberita" className='text-blue-500'>Kembali</Link>
            <div className='title flex flex-col gap-[5px] mt-10'>
                <h1 className='text-2xl font-bold'>{post.title}</h1>
                <p className=''>Written by {post.author}</p>
            </div>
            {post.gambar && (
                <Image src={post.gambar} alt={post.title} width={500} height={300} />
            )}
            <p>{post.body}</p>
        </div>
    )
}