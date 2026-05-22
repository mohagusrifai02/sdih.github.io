"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactUsPage(){
    return(
        <div className="container-contact-us w-full bg-slate-500 flex flex-col gap-[80px]">
            <h2 className="font-bold text-slate-100 text-2xl text-center mt-2">Kontak Kami</h2>
            <div className="card-contact w-[100%] sm:w-[80%] flex flex-col sm:flex-row justify-center">
                <ul className="list-contact w-[100%] sm:w-[50%] flex flex-col px-5 leading-9">
                    <li className="text-slate-300">
                        <Link href="">Alamat</Link>
                    </li>
                    <li className="text-slate-300">
                        <Link href="">Whatsapp Center</Link>
                    </li>
                    <li className="text-slate-300">
                        <Link href="">Gmail</Link>
                    </li>
                    <li className="text-slate-300">
                        <Link href="">Facebook</Link>
                    </li>
                    <li className="text-slate-300">
                        <Link href="">Instagram</Link>
                    </li>
                    <li className="text-slate-300">
                        <Link href="">Youtube</Link>
                    </li>
                </ul>
                <div className="lokasi w-[100%] sm:w-[50%] flex flex-col gap-[10px] px-5">
                    <Image 
                        src="/surabaya.jpg"
                        width={100}
                        height={100}
                        alt="kampus"
                        className="w-full h-[200px]"
                    />
                    <Image 
                        src="/muslim.jpg"
                        width={100}
                        height={100}
                        alt="kampus"
                        className="w-full h-[200px]"
                    />
                </div>
            </div>
            <footer className="w-full text-center text-sm text-slate-900">@ copyright sdih kab tegal 2025 allright reserved</footer>
        </div>
    )
}