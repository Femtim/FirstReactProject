import React from "react";
import Logo from './assets/Logo.jpg'
import Hero from './assets/Home1.jpg'

export const Blog = () => {
    return (

        <>
            <div className='mx-20 my-20  font-serif '>
                < div className='absolute mt-20 lg:mt-[250px] ml-12 lg:ml-[360px]' >
                    <div className='bg-white border shadow-md text-center p-4 lg:p-8'>
                        <h1 className='font-bold text-[15px] lg:text-[25px] justify-self-start'>Blog Form</h1>
                        <h2 className="mt-4 justify-self-start text-[15px] lg:text-[20px]">Title</h2>
                        <input className='border border-black w-[310px] lg:w-[320px]' type="text" /><br />
                        <h2 className=' mt-2 justify-self-start text-[15px] lg:text-[20px]'>Description</h2><br />
                        <textarea className='border border-black w-[310px] lg:w-[320px] h-[60px]' name="" id=""></textarea><br />
                        <button className='bg-blue-600  rounded-sm text-white pl-10 pr-10 pt-1 pb-1 text-center mt-2 w-80 '>Submit</button>
                    </div>
                </div >
                <img src={Hero} className=' mt-10 lg:mr-20 items-center border rounded justify-center lg:w-full' alt="h" />
            </div>

            

            {/* fotter */}
            <div className='text-center lg:flex md:flex justify-between mt-[350px] lg:mt-[300px] bg-slate-100 pt-8 pb-8 pl-20 pr-20'>
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
                    <a className="hover:text-blue-700 " href="#">Term of Use</a>
                    <a className="hover:text-blue-700 " href="#">Privacy Policy</a>
                    <a className="hover:text-blue-700 " href="#">Cookie Policy</a>
                </div>
            </div>


        </>
    )
};