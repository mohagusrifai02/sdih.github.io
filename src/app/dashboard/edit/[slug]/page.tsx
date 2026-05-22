"use client";

import {useState, useEffect, use} from "react"

export default function EditPage({
    params,
}:{
    params:Promise<{slug:string}>
}) {
    const [title, setTitle] = useState("");
    const [newSlug, setNewSlug] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [published, setPublished] = useState(false);
    const [gambar, setGambar] = useState<File | null>(null);
    const {slug} = use(params);

    useEffect(()=>{
        fetch(`/api/post/${slug}`)
        .then((res)=> res.json())
        .then((data)=> {
            const post = data.data;
            setTitle(post.title);
            setNewSlug(post.slug);
            setBody(post.body);
            setAuthor(post.author);
            setGambar(post.gambar);
            setPublished(post.published);
        });
    },[slug]);

    const handleUpdate = async(e: any)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("slug", newSlug || slug);
        formData.append("author", author);
        formData.append("body", body);
        formData.append("published", published.toString());

        if(gambar){
            formData.append("gambar", gambar);
        }

        const res = await fetch(`/api/post/${slug}`,{
            method:"PATCH",
            body:formData,
        });

        const data = await res.json();

        if(data.ok) {
            alert('Post berhasil di update');
        }
    };

    return (
        <form action="" onSubmit={handleUpdate}>
            <input 
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="title" />
            <input 
                type="text"
                value={newSlug}
                onChange={(e)=>setNewSlug(e.target.value)}
                placeholder="new slug" />
            <input 
                type="text"
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                placeholder="author" />
            <textarea name="" id=""
                value={body}
                onChange={(e)=> setBody(e.target.value)}></textarea>
            <label htmlFor="">
                published
                <input 
                    type="checkbox" name="" id=""
                    checked={published}
                    onChange={(e)=> setPublished(e.target.checked)} />
            </label>
            <input type="file" name="" id=""
                onChange={(e)=> setGambar(e.target.files?.[0] || null)} />

            <button type="submit">
                Ubah
            </button>
        </form>
    )
}