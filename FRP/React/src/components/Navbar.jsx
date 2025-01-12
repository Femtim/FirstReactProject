import React, { useState } from "react"
import './Navbar.css'
import { Link } from "react-router-dom";
import Logo from './Pages/assets/Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false)

    return (
        <nav className='flex justify-between mx-20 my-10 font-serif'>


            <div>

                <div className='flex'>
                    <img src={Logo} className='h-[25px]' alt="L" />
                    <>Meta</>
                    <h1 className='font-bold'>Blog</h1>
                </div>
            </div>

            <div className="hidden lg:flex lg:space-x-4">
                <h1 className="hover:text-blue-700"><Link to="/">Home</Link></h1>

                <h1 className="hover:text-blue-700"><Link to="/Blog">Blog</Link></h1>
                <h1 className="hover:text-blue-700"><Link to="/Singlepost">Single Post</Link></h1>
                <h1 className="hover:text-blue-700"><Link to="/Pages">Pages</Link></h1>
                <h1 className="hover:text-blue-700"><Link to="/Contact">Contact</Link></h1>
            </div>
            <div className="text-white lg:hidden">
                <ul className={menuOpen ? "open" : ""} >
                    <li className=" hover:text-blue-700"><Link to="/">Home</Link></li>
                    <li className="hover:text-blue-700"><Link to="/Blog">Blog</Link></li>
                    <li className="hover:text-blue-700"><Link to="/Singlepost">Single Post</Link></li>
                    <li className="hover:text-blue-700"><Link to="/Pages">Pages</Link></li>
                    <li className="hover:text-blue-700"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>


            <div className='menu  lg:hidden md:hidden' onClick={() => {
                setmenuOpen(!menuOpen)
            }}>
                <FontAwesomeIcon icon={faBars} className='fa-2x' id="icon" />
            </div>

            <div className="hidden lg:flex mr-2">
                <input className="border rounded-md p-3 h-2 w-[150px] bg-slate-100" type="text" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            

            </div>

        </nav>

    )
}