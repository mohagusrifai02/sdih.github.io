"use client";

import Image from "next/image";

export default function ProgramPage(){
    return(
        <div className="container-about-us w-full flex flex-col gap-[40px]  bg-gray-100 px-10 py-20 sm:py-10">
            <h2 className="font-bold text-slate-800 text-center text-3xl">Program utama</h2>
            <ul className="card-about w-full sm:w-[80%] flex flex-col sm:flex-row flex-wrap justify-start gap-[20px]">
                <li className="list-shadow bg-white text-slate-700 w-[100%] sm:w-[30%] flex flex-col gap-[20px]">
                    <Image 
                        src='/muslim.jpg'
                        width={100}
                        height={100}
                        alt="aqidah"
                        className="w-full"
                    />
                    <h2 className="font-bold text-lg px-5">Integrasi Aqidah</h2>
                    <h4 className="px-5 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum optio omnis minus? Nisi, quibusdam tempora expedita, ab neque sit iusto culpa necessitatibus commodi repellat a exercitationem repudiandae! Eum, qui.</h4>
                    
                </li>
                <li className="list-shadow bg-white text-slate-700  w-[100%] sm:w-[30%] flex flex-col gap-[20px]">
                    <Image 
                        src='/muslim.jpg'
                        width={100}
                        height={100}
                        alt="tahfidz"
                        className="w-full"
                    />
                    <h2 className="font-bold text-lg px-5">Tahfidzul Quran</h2>
                    <h4 className="px-5 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum optio omnis minus? Nisi, quibusdam tempora expedita, ab neque sit iusto culpa necessitatibus commodi repellat a exercitationem repudiandae! Eum, qui.</h4>
                    
                </li>
                <li className="list-shadow bg-white text-slate-700  w-[100%] sm:w-[30%] flex flex-col gap-[20px]">
                    <Image 
                        src='/muslim.jpg'
                        width={100}
                        height={100}
                        alt="takhassus"
                        className="w-full"
                    />
                    <h2 className="font-bold text-lg px-5">Kelas Takhassus</h2>
                    <h4 className="px-5 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum optio omnis minus? Nisi, quibusdam tempora expedita, ab neque sit iusto culpa necessitatibus commodi repellat a exercitationem repudiandae! Eum, qui.</h4>
                </li>
            </ul>
        </div>
    )
}