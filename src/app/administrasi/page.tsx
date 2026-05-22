"use client";

import Image from "next/image";

export default function AdministrasiPage(){
    return(
        <div className="container-about-us w-full flex flex-col gap-[40px]  bg-gray-100 px-10 py-20 sm:py-10">
            <h2 className="font-bold text-slate-800 text-center text-3xl">Statistik</h2>
            <ul className="card-about w-full sm:w-[80%] flex flex-wrap justify-start gap-[20px]">
                <li className="list-shadow p-5 bg-white text-slate-700 w-[45%] sm:w-[30%] flex flex-col gap-[20px] justify-center items-center">
                    <h2 className="font-bold text-lg text-slate-500">Siswa</h2>
                    <h1 className="text-5xl font-bold text-slate-800">70</h1>
                </li>
                <li className="list-shadow p-5 bg-white text-slate-700  w-[45%] sm:w-[30%] flex flex-col gap-[20px] justify-center items-center">
                    <h2 className="font-bold text-lg text-slate-500">Alumni</h2>
                    <h1 className="text-5xl font-bold text-slate-800">20</h1>
                </li>
                <li className="list-shadow p-5 bg-white text-slate-700  w-[45%] sm:w-[30%] flex flex-col gap-[20px] justify-center items-center">
                    <h2 className="font-bold text-lg text-slate-500">Guru</h2>
                    <h1 className="text-5xl font-bold text-slate-800">7</h1>
                </li>
            </ul>
            <div className="w-full flex flex-col gap-[40px]  bg-gray-100 py-20 sm:py-10">
                <h2 className="font-bold text-slate-800 text-center text-3xl">Mengapa harus di SD IH Kab.Tegal?</h2>
                <ul className="card-about w-full sm:w-[80%] flex flex-wrap justify-start gap-[20px]">
                    <li className="list-shadow bg-white text-slate-700 w-[100%] sm:w-[30%] flex flex-col gap-[20px]">
                    <Image 
                        src='/surabaya.jpg'
                        width={100}
                        height={100}
                        alt="aqidah"
                        className="w-full"
                    />
                    <h2 className="font-bold text-lg px-5">Kampus yang asri</h2>
                    <h4 className="px-5 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum optio omnis minus? Nisi, quibusdam tempora expedita, ab neque sit iusto culpa necessitatibus commodi repellat a exercitationem repudiandae! Eum, qui.</h4>
                </li>
                <li className="list-shadow bg-white text-slate-700  w-[100%] sm:w-[30%] flex flex-col gap-[20px]">
                    <Image 
                        src='/surabaya.jpg'
                        width={100}
                        height={100}
                        alt="tahfidz"
                        className="w-full"
                    />
                    <h2 className="font-bold text-lg px-5">Full day school</h2>
                    <h4 className="px-5 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum optio omnis minus? Nisi, quibusdam tempora expedita, ab neque sit iusto culpa necessitatibus commodi repellat a exercitationem repudiandae! Eum, qui.</h4>
                </li>
                <li className="list-shadow bg-white text-slate-700  w-[100%] sm:w-[30%] flex flex-col gap-[20px]">
                    <Image 
                        src='/surabaya.jpg'
                        width={100}
                        height={100}
                        alt="takhassus"
                        className="w-full"
                    />
                    <h2 className="font-bold text-lg px-5">Pengembangan minat dan bakat</h2>
                    <h4 className="px-5 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum optio omnis minus? Nisi, quibusdam tempora expedita, ab neque sit iusto culpa necessitatibus commodi repellat a exercitationem repudiandae! Eum, qui.</h4>
                </li>
                </ul>
            </div>
        </div>
    )
}