"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiswaTakhasusPage(){
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("pilih gender");
    const [noWhatsapp, setNoWhatsapp] = useState("");
    const [kelas, setKelas] = useState("pilih kelas");

    const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();

    try {
        const res = await fetch("/api/pendaftaran", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                nama,
                alamat,
                tanggalLahir,
                jenisKelamin,
                noWhatsapp,
                kelas
            })
        });

        const data = await res.json();

        if (data.ok) {
            alert("Pendaftaran takhasus berhasil");
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error(error);
        alert("Gagal menambahkan data");
    }
    }

    return(
        <div className="container-siswa-takhasus w-full flex flex-col gap-[20px] justify-center bg-gray-100 py-5">
            <h2 className="font-bold text-slate-800 text-xl px-5">
                <Link href="/">&laquo;</Link>&nbsp;
                Kelas Takhasus
            </h2>
            <div className="list-shadow p-5 bg-white text-slate-700 w-[100%] sm:w-[50%] flex flex-col gap-[20px]">
                <Image 
                    src='/muslim.jpg'
                    width={100}
                    height={100}
                    alt="aqidah"
                    className="w-full h-[300px]"
                />
                <h2 className="font-bold text-lg">Kelas Takhasus</h2>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum optio omnis minus? Nisi, quibusdam tempora expedita, ab neque sit iusto culpa necessitatibus commodi repellat a exercitationem repudiandae! Eum, qui.</h4>          
            </div>
            <form action="" className="w-full sm:w-1/2 flex flex-col gap-[30px] bg-slate-600" onSubmit={handleSubmit}>
                <h2 className="font-bold text-slate-300 text-xl px-5 py-3">Form Pendaftaran</h2>
                <ul className="w-full sm:w-[80%] flex flex-col gap-[30px] sm:gap-[10px] py-5 px-3">
                    <li className="h-[30px] flex flex-col sm:flex-row">
                        <label htmlFor="" className="w-[300px] text-slate-200">Nama Lengkap</label>
                        <input type="text" name="" id="" 
                        value={nama} 
                        onChange={(e)=>setNama(e.target.value)} className="w-full sm:w-[300px] bg-white"/>
                    </li>
                    <li className="h-[30px] flex flex-col sm:flex-row">
                        <label htmlFor="" className="w-[300px] text-slate-200">Gender</label>
                        <select name="" id="" className="w-full sm:w-[300px] bg-white" 
                        value={jenisKelamin} 
                        onChange={(e)=>setJenisKelamin(e.target.value)}>
                            <option value="pilih gender">Pilih Gender</option>
                            <option value="laki-laki">Laki-laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select>
                    </li>
                    <li className="h-[30px] flex flex-col sm:flex-row">
                        <label htmlFor="" className="w-[300px] text-slate-200">Alamat</label>
                        <input type="text" name="" id="" 
                        value={alamat} 
                        onChange={(e)=>setAlamat(e.target.value)} className="w-full sm:w-[300px] bg-white"/>
                    </li>
                    <li className="h-[30px] flex flex-col sm:flex-row">
                        <label htmlFor="" className="w-[300px] text-slate-200">Tanggal Lahir</label>
                        <input type="date" name="" id=""  
                        value={tanggalLahir}
                        onChange={(e)=>setTanggalLahir(e.target.value)}
                        className="w-full sm:w-[300px] bg-white"/>
                    </li>
                    <li className="h-[30px] flex flex-col sm:flex-row">
                        <label htmlFor="" className="w-[300px] text-slate-200">No Whatsapp</label>
                        <input type="tel" name="" id="" 
                        value={noWhatsapp}
                        onChange={(e)=>setNoWhatsapp(e.target.value)} className="w-full sm:w-[300px] bg-white"/>
                    </li>
                    <li className="h-[30px] flex flex-col sm:flex-row">
                        <label htmlFor="" className="w-[300px] text-slate-200">Pilih Kelas Takhassus</label>
                        <select name="" id="" className="w-full sm:w-[300px] bg-white" 
                        value={kelas} 
                        onChange={(e)=>setKelas(e.target.value)}>
                            <option value="pilih kelas">Pilih Kelas</option>
                            <option value="kelastakhassus">kelas Takhassus</option>
                        </select>
                    </li>
                    <li>
                        <button type="submit" className="px-5 py-1 rounded-md bg-blue-600 text-slate-100">Daftar</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}