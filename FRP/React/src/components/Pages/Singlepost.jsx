import React from "react";
import R2 from './assets/R2.jpg'
import B1 from './assets/B1.jpg'
import B2 from './assets/B2.jpg'
import Logo from './assets/Logo.jpg'


export const Singlepost = () => {
    return (
        <>
            <div className=" mx-20 my-10 font-serif">
                <div >
                    <div className="p">
                        <h1 className='bg-blue-600 text-white border rounded text-left text-center w-[100px] mt-3'>Technology</h1>
                        <p className='text-left font-bold mt-3'>The Impact of Technology on Workplace: How Technology is Changing</p>
                        <div className='flex space-x-4 mt-3'>
                            <img className='border rounded-full size-7' src={R2} alt="" />
                            <h1>Tracey Wilson</h1>
                            <h2>August 20, 2022.</h2>
                        </div>
                    </div>

                    <div className="mt-7">
                        <img className="border rounded" src={B1} alt="" />
                        <p className="mt-4">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
                        <h1 className="mt-6 mb-3 font-bold">Research Your Destination</h1>
                        <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est assumenda distinctio saepe quidem molestias facilis odio qui, unde molestiae, magnam temporibus labore quisquam rem similique ad, minima vel sequi voluptate.</p>
                        <h1 className="mt-6 mb-3 font-bold">Plan Your Itinerary</h1>
                        <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
                        <p>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                        <h2 className="mt-6 mb-3 font-bold bg-slate-200 broder rounded shadow-md p-4">“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</h2>
                        <img src={B2} alt="" />
                        <div className="mt-5 justify-center text-center bg-slate-200 border rounded">
                            <h1>Advertisement</h1>
                            <p className="font-bold">You can place ads</p>
                            <p>750x100</p>
                        </div>
                        <h1 className="mt-6 mb-3 font-bold">Pack Lightly and Smartly</h1>
                        <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
                        <h1 className="mt-6 mb-3 font-bold">Stay Safe and Healthy</h1>
                        <p>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
                        <h1 className="mt-6 mb-3 font-bold">Immerse Yourself in the Local Culture</h1>
                        <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                        <h1 className="mt-6 mb-3 font-bold">Capture Memories</h1>
                        <p>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
                        <h2 className="mt-6 mb-3 font-bold">Conclusion:</h2>
                        <p>Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
                    </div>
                </div>
            </div>

            {/* fotter */}
            <div className=' text-center lg:flex md:flex justify-between mt-48 bg-slate-100 pt-8 pb-8 pl-20 pr-20'>
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
            <div className='text-center  lg:flex justify-between p-4'>
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