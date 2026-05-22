"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faXmark, faRightFromBracket, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";

const DashboardPage= ()=>{
    const [title, setTitle]= useState("");
    const [slug, setSlug] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [published, setPublished] = useState(false);
    const [gambar, setGambar] = useState<File | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const [posts, setPosts] = useState([]);
    const [pendaftaran, setPendaftaran] = useState([]);
    const [form, setForm] = useState({
        title:'',
        slug:'',
        body:'',
        author:'',
        published:false,
        gambar:null,
        nama:'',
        alamat:'',
        jenisKelamin:'',
        tanggalLahir:'',
        noWhatsapp:'',
        kelas:'',
    });

    const fetchPosts = async () =>{
        const res = await fetch('/api/post');
        const data = await res.json();
        if(data.ok) setPosts(data.data);
    }

    const fetchPendaftaran = async () => {
        const res = await fetch('/api/pendaftaran');
        const data = await res.json();
        if(data.ok) setPendaftaran(data.data);
    }

    useEffect(() => {
        fetchPosts();
        fetchPendaftaran();
    }, []);

    const router = useRouter();

    const handleLogout = async()=>{
        await fetch('/api/auth/logout', {
            method:'POST',
        });

        router.replace('/login');
    }
    
    



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("slug", slug);
        formData.append("body", body);
        formData.append("author", author);
        formData.append("published", published.toString());

        if (gambar) {
            formData.append("gambar", gambar);
        }

        try {
            const res = await fetch("/api/post", {
                method:"POST",
                body: formData,
            });

            const data = await res.json();

            if (data.ok) {
                alert("Berita berhasil ditambahkan");
            } else {
                alert(data.error)
            }
        } catch (error) {
            console.error(error);
            alert("Gagal menambahkan berita");
        }

    }

    const formOpen = ()=> {
            setIsOpen(false);
    }
    const formClose = ()=> {
            setIsOpen(true);
    }

    return(
        <div className="dashboard-pagefont-sans flex flex-col gap-[10px] py-1 items-center">
            <div className="bars-dashboard w-[100%] bg-white shadow-md px-5 py-1 cursor-pointer flex gap-[10px]">
                <h1>Welcome to the Dashboard</h1>
                <div className="ml-auto flex gap-[10px]">
                    <FontAwesomeIcon className="text-2xl text-slate-800" icon={faRightFromBracket} onClick={handleLogout}/>
                    <FontAwesomeIcon className={`text-2xl ${isOpen? 'text-red-500' : 'text-green-500'}`} onClick={isOpen? formOpen:formClose} icon={isOpen? faXmark:faPlusSquare}/>
                </div>
            </div>
            <div className="statistik py-4 w-[90%] flex gap-[10px]">
                <div className="statistik-posts bg-gray-100 h-[100px] w-[200px] px-5 py-1 rounded flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <div>
                        <FontAwesomeIcon className="" icon={faNewspaper}/>
                        <h3>Posts</h3>
                    </div>
                    <h1 className="text-4xl font-bold">{posts.length}</h1>
                </div>
                <div className="statistik-pendaftaran bg-gray-100 h-[100px] w-[200px] px-5 py-1 rounded flex items-center justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    <div>
                        <FontAwesomeIcon className="" icon={faUser}/>
                        <h3>Pendaftaran</h3>
                    </div>
                    <h1 className="text-4xl font-bold">{pendaftaran.length}</h1>
                </div>
            </div>
            <div className={`form-list bg-white shadow-md px-5 py-1 w-1/2 ${isOpen? 'open':'block'}`}>
                <form
                    className="flex flex-col"
                    onSubmit={handleSubmit}>
                    <input
                    className="border-2 rounded px-2 py-1 border-gray-200 mb-2" 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    />
                    <input 
                    className="border-2 rounded px-2 py-1 border-gray-200 mb-2"
                    type="text" 
                    placeholder="Slug" 
                    value={slug} 
                    onChange={(e) => setSlug(e.target.value)} 
                    />
                    <textarea 
                    className="border-2 rounded px-2 py-1 border-gray-200 mb-2 h-40"
                    placeholder="Body" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)} 
                    />
                    <input 
                    className="border-2 rounded px-2 py-1 border-gray-200 mb-2"
                    type="text" 
                    placeholder="Author" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    />
                    <label>
                        <input 
                        type="checkbox" 
                        checked={published} 
                        onChange={(e) => setPublished(e.target.checked)} 
                        />
                        Published
                    </label>
                    <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => setGambar(e.target.files?.[0] || null)} 
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
            <div className="list-dashboard flex gap-[10px] w-[90%] justify-start">
                <div className="body-dashboard bg-white shadow-md py-1 w-[40%] order-2">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left">Ilustrasi</th>
                                <th className="text-left">Title</th>
                                <th className="text-left">Published</th>
                                <th className="text-left" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post: any) => (
                                <tr key={post._id}>
                                    <td>
                                        {post.gambar && (
                                            <Image 
                                                src={post.gambar} 
                                                alt={post.title} 
                                                width={50} 
                                                height={50} 
                                            />
                                        )}
                                    </td>
                                    <td>{post.title}</td>
                                    <td>{post.published ? "Yes" : "No"}</td>
                                    <td>
                                        <Link href={`/dashboard/${post.slug}`}>Baca</Link>
                                    </td>
                                    <td>
                                        <Link href={`/dashboard/edit/${post.slug}`}>Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="body-dashboard bg-white shadow-md py-1 w-[40%] order-1">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left">Nama</th>
                                <th className="text-left">No Whatsapp</th>
                                <th className="text-left">Kelas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendaftaran.map((pendaftar: any) => (
                                <tr key={pendaftar._id}>
                                    <td>{pendaftar.nama}</td>
                                    <td>{pendaftar.noWhatsapp}</td>
                                    <td>{pendaftar.kelas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;
                                            