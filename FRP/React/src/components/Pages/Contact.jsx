import React from "react";
import Logo from './assets/Logo.jpg'
import Home2 from './assets/Home2.jpg'
import Home3 from './assets/Home3.jpg'
import Home4 from './assets/Home4.jpg'
import Home5 from './assets/Home5.jpg'
import Home6 from './assets/Home6.jpg'
import Home7 from './assets/Home7.jpg'
import Home8 from './assets/Home8.png'
import Home9 from './assets/Home9.jpeg'
import Home10 from './assets/Home10.jpeg'
import R1 from './assets/R1.jpg'
import R2 from './assets/R2.jpg'
import R3 from './assets/R3.jpg'
import F from './assets/logo-facebook.svg'
import T from './assets/logo-twitter.svg'
import I from './assets/logo-instagram.svg'
import Y from './assets/logo-youtube.svg'

export const Contact = () => {
    return (
        <>
            <div className='mx-20 my-10 mr-24 font-serif '>
                <div>

                    <div className="justify-center text-center ml-4">
                        <div className="bg-slate-100  border rounded p-4 ">
                            <div className="flex space-x-2 justify-self-center ">
                                <img className='border rounded-full object- size-12' src={R3} alt="" />
                                <h1 className="mx-">Tracey Wilson <br /> Collaborator & Editor</h1>
                            </div>
                            <p className="mt-6">Meet Jonathan Doe, a passionate writer and blogger <br /> with a love for technology and travel. Jonathan holds a <br /> degree in Computer Science and has spent years <br /> working in the tech industry, gaining a deep <br /> understanding of the impact technology has on our lives.</p>
                            <div className="mt-3 flex space-x-2 justify-self-center">
                              <img className="w-5 " src={F} alt="" />
                              <img className="w-5 " src={T} alt="" />
                              <img className="w-5 " src={I} alt="" />
                              <img className="w-5 " src={Y} alt="" />
                            </div>
                        </div>
                    </div>

                    <div id='Home' className='mt-20'>
                        <h3 className=' font-bold flex justify-between mt-10 ml-4'>
                            <p >Latest Post</p>
                            <p className='bg-slate-200 pl-3 pr-3 border'>Add Blog</p>
                        </h3>

                        <div className='justify-center items-center'>
                            <div className='lg:flex md:flex space-x-4'>
                                <div className='mt-8 border shadow p-2 ml-4'>
                                    <img src={Home2} alt="" />
                                    <h1 className='text-blue-500 mt-3 text-left border bg-white w-20'>Technology</h1>
                                    <p className='font-bold mt-3 text-left'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex mt-3 space-x-4'>
                                        <img className='border rounded-full size-7' src={R1} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>

                                <div className='mt-8 border shadow p-2 w-'>
                                    <img src={Home3} alt="" />
                                    <h1 className='text-blue-500 mt-3 text-left'>Technology</h1>
                                    <p className='font-bold text-left mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex mt-3 space-x-4'>
                                        <img className='border rounded-full size-7' src={R2} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>

                                <div className='mt-8 border shadow p-2 w-'>
                                    <img src={Home4} alt="" />
                                    <h1 className='text-blue-500 text-left mt-3 '>Technology</h1>
                                    <p className='font-bold text-left mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex space-x-4 mt-3'>
                                        <img className='border rounded-full size-7' src={R3} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>
                            </div>

                            <div className='lg:flex md:flex  space-x-4'>
                                <div className='mt-8 border shadow p-2 ml-4'>
                                    <img src={Home5} alt="" />
                                    <h1 className='text-blue-500 text-left mt-3'>Technology</h1>
                                    <p className='font-bold text-left mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex space-x-4 mt-3'>
                                        <img className='border rounded-full size-7' src={R1} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>

                                <div className='mt-8 border shadow p-2 w-'>
                                    <img src={Home6} alt="" />
                                    <h1 className='text-blue-500 text-left mt-3'>Technology</h1>
                                    <p className='font-bold text-left mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex space-x-4 mt-3'>
                                        <img className='border rounded-full size-7' src={R2} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>

                                <div className='mt-8 border shadow p-2 w-'>
                                    <img src={Home7} alt="" />
                                    <h1 className='text-blue-500 text-left mt-3'>Technology</h1>
                                    <p className='font-bold text-left mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex space-x-4 mt-3'>
                                        <img className='border rounded-full size-7' src={R3} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>
                            </div>

                            <div className='lg:flex md:flex  space-x-4'>
                                <div className='mt-8 border shadow p-2 ml-4'>
                                    <img src={Home8} alt="" />
                                    <h1 className='text-blue-500 text-left mt-3'>Technology</h1>
                                    <p className='font-bold text-left mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex space-x-4 mt-3'>
                                        <img className='border rounded-full size-7' src={R1} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>

                                <div className='mt-8 border shadow p-2 w-'>
                                    <img src={Home9} alt="" />
                                    <h1 className='text-blue-500 text-left mt-3'>Technology</h1>
                                    <p className='font-bold text-left mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex space-x-4 mt-3'>
                                        <img className='border rounded-full size-7' src={R2} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>

                                <div className='mt-8 border shadow p-2 w-'>
                                    <img src={Home10} alt="" />
                                    <h1 className='text-blue-500 text-left mt-3'>Technology</h1>
                                    <p className='text-left font-bold mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                                    <div className='flex space-x-4 mt-3'>
                                        <img className='border rounded-full size-7' src={R3} alt="" />
                                        <h1>Tracey Wilson</h1>
                                        <h2>August 20, 2022.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className='border mt-8 justify-self-center w-[150px] text-center pl-2 pr-2'>View All Post</h3>
                    </div>
                </div>
            </div>

            {/* fotter */}
            <div className='text-center lg:flex md:flex justify-between mt-32 bg-slate-100 pt-8 pb-8 pl-20 pr-20'>
                <div className='lg:text-left'>
                    <h1 className='font-bold'>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Cumque odio <br /> corporis vel officiis ad consectetur ex enim minus <br />tempora explicabo quas rerum accusamus ul sapiente ab!</p>
                    <div className='mt-4 flex justify-center'>
                        <h2 className='font-bold'>Email:</h2>
                        <> ojedokunferanmi03@gmail.com</>
                    </div>
                    <div className='flex justify-center'>
                        <h2 className='font-bold'>Phone:</h2>
                        <> 09063323979</>
                    </div>

                </div>

                <div className='mt-8 md:mt-0 lg:mt-0'>
                    <h1 className='font-bold'>Quick Link</h1>
                    <p className="hover:text-blue-700"><a href="/">Home</a></p>
                    <p className="hover:text-blue-700"><a href="/Blog">Blog</a></p>
                    <p className="hover:text-blue-700"><a href="/Single Post">Single Post</a></p>
                    <p className="hover:text-blue-700"><a href="/Pages">Pages</a></p>
                    <p className="hover:text-blue-700"><a href="/Contact">Contact</a></p>

                </div>
                <div className='mt-8 md:mt-0 lg:mt-0'>
                    <h1 className='font-bold'>Category</h1>
                    <p className="hover:text-blue-700"><a href="#">Lifestyle</a></p>
                    <p className="hover:text-blue-700"><a href="#">Technology</a></p>
                    <p className="hover:text-blue-700"><a href="#">Travel</a></p>
                    <p className="hover:text-blue-700"><a href="#">Business</a></p>
                    <p className="hover:text-blue-700"><a href="#">Economy</a></p>
                    <p className="hover:text-blue-700"> <a href="#">Sports</a></p>
                </div>
                <div className='mt-8 md:mt-0 lg:mt-0 border bg-white p-4 justify-center text-center'>
                    <h1 className='font-bold'>Weekly Newsletter</h1>
                    <p>Get blog articles and offers via email</p>
                    <input className='border border-2 mt-4 w-80' type="email" placeholder='Your Email' /><br />
                    <button className='bg-blue-600 rounded-sm text-white pl-10 pr-10 pt-1 pb-1 text-center mt-2 w-80'>Subscribe</button>
                </div>
            </div>

            {/* last fotter */}
            <div className=' text-center lg:flex justify-between p-4'>
                <div>
                    <div className='flex justify-self-center'>
                        <img src={Logo} className='h-[30px]' alt="L" />
                        <div className='flex'>
                            <>Meta</>
                            <h1 className='font-bold'>Blog</h1>
                        </div>
                    </div>
                    <p>&copy; 2024 Femtim. All rights reserved.</p>
                </div>
                <div className='space-x-6 mt-2 '>
                    <a href="#">Term of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>

        </>
    )
};