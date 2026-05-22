"use client";

import Link from "next/link"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHome, faPhoneSquare, faBook, faChartColumn, faInfoCircle, faNewspaper, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export default function NavbarPage(){
    const [isOpen, setIsOpen]= useState(true);

    const menuOpen = ()=>{
        setIsOpen(false);
    }
    const menuClose = ()=>{
        setIsOpen(true);
    }


    return(
        <div className="nav-page">
            <div className="card-nav w-full flex flex-col justify-center items-center p-2 gap-[10px] bg-white rounded list-shadow">
                <div className="title block sm:hidden">
                    <FontAwesomeIcon 
                        className={`p-1 text-xl cursor-pointer ${isOpen?'text-slate-800':'text-red-800'}`}
                        onClick={isOpen? menuOpen:menuClose}
                        icon={isOpen? faBars : faXmark} />
                </div>
                <ul className={`nav-list ${isOpen? 'block' : 'open'}`}>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faHome} />
                        <Link href='/'>Homepage</Link>
                    </li>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faInfoCircle} />
                        <Link href='/aboutus'>About Us</Link>
                    </li>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faPhoneSquare} />
                        <Link href='/contactus'>Contact Us</Link>
                    </li>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faBook} />
                        <Link href='/program'>Program strategis</Link>
                    </li>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faChartColumn} />
                        <Link href='/administrasi'>Administrasi</Link>
                    </li>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faBook} />
                        <Link href='/kbm'>Kegiatan belajar mengajar</Link>
                    </li>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faNewspaper} />
                        <Link href='/portalberita'>Portal Berita</Link>
                    </li>
                    <li className="h-[50px]">
                        <FontAwesomeIcon className="mr-2" icon={faUserGraduate} />
                        <Link href='/alumni'>Testimoni Alumni</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}