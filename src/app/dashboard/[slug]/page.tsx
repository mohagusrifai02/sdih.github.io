"use client";

import {useState, useEffect, use} from "react"
import Image from "next/image";

type PostType ={
    title: string;
    gambar: string;
    body: string;
}
// detail data
export default function DetailPage({
    params,
}:{
    params: Promise<{slug:string}>
}){
    const [post, setPost] = useState<PostType | null>(null);

    const {slug} = use(params);

    useEffect(()=> {
        fetch(`/api/post/${slug}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.ok) setPost(data.data);
        });
    },[slug]);

    if (!post) return <p>Loading...</p>;

    // hapus data
    const handleDelete = async()=> {
        const confirmDelete = confirm("hapus post ini");
        if (!confirmDelete) return;

        const res = await fetch(`/api/post/${slug}`, {
            method:"DELETE",
        });

        const data = await res.json();

        if (data.ok) {
            alert("Post berhasil dihapus")
        };
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <Image src={post.gambar} alt={post.title} width={600} height={400} />
            <p>{post.body}</p>
            <button onClick={handleDelete}>Hapus</button>
        </div>
    )
}
