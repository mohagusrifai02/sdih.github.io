"use client";

import Link from "next/link";

export default function AboutUsPage(){
    return(
        <div className="container-about-us w-full flex flex-col gap-[40px]  bg-gray-100 px-10 py-20 sm:py-10">
            <h2 className="font-bold text-slate-800 text-center text-3xl">Tentang Kami</h2>
            <ul className="card-about w-full sm:w-[80%] flex flex-wrap justify-start gap-[20px]">
                <li className="list-shadow p-5 bg-white text-slate-700 w-[45%] sm:w-[30%] flex flex-col gap-[20px]">
                    <h2 className="font-bold text-lg">Hidayatullah</h2>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, temporibus!</h4>
                    <span className="text-sm text-red-400">
                        <Link href='https://hidayatullah.or.id'>Read more ...</Link>
                    </span>
                </li>
                <li className="list-shadow p-5 bg-white text-slate-700  w-[45%] sm:w-[30%] flex flex-col gap-[20px]">
                    <h2 className="font-bold text-lg">Hidayatullah Jateng</h2>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, temporibus!</h4>
                    <span className="text-sm text-red-400">
                        <Link href='https://hidayatullahjateng.id'>Read more ...</Link>
                    </span>
                </li>
                <li className="list-shadow p-5 bg-white text-slate-700  w-[45%] sm:w-[30%] flex flex-col gap-[20px]">
                    <h2 className="font-bold text-lg">Hidayatullah Tegal</h2>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, temporibus!</h4>
                    <span className="text-sm text-red-400">
                        <Link href='https://alqiroah.pythonanywhere.com'>Read more ...</Link>
                    </span>
                </li>
                <li className="list-shadow p-5 bg-white text-slate-700  w-[45%] sm:w-[30%] flex flex-col gap-[20px]">
                    <h2 className="font-bold text-lg">Yayasan Al-Ishlah Kab.Tegal</h2>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, temporibus!</h4>
                    <span className="text-sm text-red-400">
                        <Link href='https://www.alishlahtegal.net'>Read more ...</Link>
                    </span>
                </li>
                <li className="list-shadow p-5 bg-white text-slate-700  w-[45%] sm:w-[30%] flex flex-col gap-[20px]">
                    <h2 className="font-bold text-lg">Pendidikan Integral</h2>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, temporibus!</h4>
                    <span className="text-sm text-red-400">
                        <Link href='/pendidikanintegral'>Read more ...</Link>
                    </span>
                </li>
            </ul>
        </div>
    )
}