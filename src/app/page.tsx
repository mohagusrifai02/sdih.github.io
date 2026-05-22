"use client";

import Image from "next/image";
import Link from "next/link";
import AboutUsPage from "./aboutus/page";
import ProgramPage from "./program/page";
import ContactUsPage from "./contactus/page";
import AdministrasiPage from "./administrasi/page";
import PortalBeritaPage from "./portalberita/page";

export default function Home() {
  return (
    <>
    <div className="home-page">
      <div className="wrapper  w-[100%] h-[100vh] flex flex-col px-10 sm:px-20 py-30">
        <div className="card-hero w-full h-full sm:w-1/2 px-10 py-5 sm:py-2 items-center flex gap-[20px] bg-white">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <Image 
                src='/pendidikanHidayatullah.png'
                alt="profil"
                width={100}
                height={100}
              />
              <h1 className="w-[200px]">Welcome to SD Integral Hidayatullah Kab.Tegal</h1>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo consequatur ab reiciendis blanditiis dolorum id autem veritatis cumque iusto similique fuga unde earum labore dolores, ex illo quia tempore omnis expedita? Quae quibusdam dignissimos optio quidem nemo similique deleniti, aspernatur eaque autem! Ipsa accusamus consequatur molestiae nobis pariatur excepturi!</h2>
          </div>
        </div>
        <ul className="card-hero-button w-full sm:w-1/2 flex justify-around">
          <li className="w-[40%] py-5 px-2 bg-slate-500 text-slate-100 mt-[-10px]">
            <h4 className="font-bold">Kelas Umum</h4>
            <Link href='siswaumum' className="text-sm bg-blue-600 py-1 px-2 text-slate-100 rounded-md">Daftar &raquo;</Link>
          </li>
          <li className="w-[40%] py-5 px-2 bg-slate-500 text-slate-100 mt-[-10px]">
            <h4 className="font-bold">Kelas Takhassus</h4>
            <Link href='siswatakhassus' className="text-sm bg-blue-600 py-1 px-2 text-slate-100 rounded-md">Daftar &raquo;</Link>
          </li>
        </ul>
      </div>
    </div>
    <AboutUsPage/>
    <ProgramPage/>
    <AdministrasiPage/>
    <PortalBeritaPage/>
    <ContactUsPage/>
    </>
  );
}
