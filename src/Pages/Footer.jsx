import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup
    }, []);

    // Convert time to IST using Intl.DateTimeFormat
    const indianTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(time);
    const gmtOffset = "+05:30";
    return (
        <>


        <br /><br /><br /><br />
        <hr />
            <div className='flex flex-col md:flex-row mb-10 relative z-2 '>
                <div className='w-full md:w-[70%] px-2'>
                    <h1 className='text-7xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[16rem] md:mb-10 ml-8'>OG beauty</h1>
                    <p className='text-4xl mt-5 md:mt-1 md:text-6xl text-end text-gray-800'>The creative  <br />perfume </p>
                </div>
                <div className='w-full p-5  md:w-[30%] mt-10 md:mt-30 tracking-tight'>
                    <p className='text-4xl flex items-start text-gray-800 tracking-tight font-semibold'><img src="/footer/img1.svg" alt="" className='w-5 aspect-square object-contain' />&nbsp; we are current based on india and work remotely.</p>
                    <p className='text-2xl md:text-4xl flex items-center mt-8 text-gray-800'><img src="/footer/img2.svg" alt="" className='w-5 aspect-square object-contain ' />&nbsp;TimeZone ({gmtOffset}).</p>
                    <p className='text-6xl font-bold text-gray-700 mt-4 ml-4'>{indianTime}</p>
                </div>
            </div>
            <hr />
            <div className='flex text-gray-700 flex-col md:flex-row'>
                <div className='text-3xl tracking-tighter pl-10 mt-20 md:w-92'>
                    <Link to="/about">
                    <p className='mb-3 '>
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>H</span>ome
                    </p>
                      <p className='mb-3 '>
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>W</span>ork
                    </p>
                      <p className='mb-3 '>
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>A</span>bout
                    </p>
                      <p className='mb-3 '>
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>J</span>ournal
                    </p>
                      <p className='mb-3 '>
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>C</span>ontact
                    </p>
                      <p className='mb-3 '>
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>M</span>embership
                    </p>

                    </Link>
                  
                </div>
                <div className='text-3xl tracking-tighter pl-10 mt-20 w-[32rem]'>
                    <p className='mb-3 '>
                        <a href="https://merchant.razorpay.com/policy/ROXLXq4ppgv2Pf/privacy">
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>P</span>rivacy policy</a>
                    </p>
                    <p className='mb-3 '>
                         <a href="https://merchant.razorpay.com/policy/ROXLXq4ppgv2Pf/terms">
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>T</span>erms service</a>
                    </p>
                    <p className='mb-3 '>
                        <a href="https://merchant.razorpay.com/policy/ROXLXq4ppgv2Pf/refund">
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>R</span>efund Policy</a>
                    </p>
                    <p className='mb-3 '>
                        <a href="https://merchant.razorpay.com/policy/ROXLXq4ppgv2Pf/shipping">
                        <span className='inline-block border-b-2 border-orange-500 pb-0.5'>D</span>elivery</a>
                    </p>
                 
                </div>
                <div className=' border-l-1 border-r-1 bg-gray-100 border-gray-400 p-10 '>
                    <h2 className='text-5xl font-semibold mt-10 mb-6'>Stay in the Loop</h2>
                    <p className='text-2xl mb-5'>Stay informed about our latest  news, updates by subscribing to our newsletter.</p>
                    <p className='text-lg mb-5'>We respect your inbox. No spam, just valuable updates.</p>
                    <div className='flex justify-between border-b border-gray-400 pr-4'>
                    <input className='mb-3 outline-0  p-2 text-2xl md:text-4xl w-full'  placeholder='Your Email' />
                    <img src="/footer/img3.svg" alt="" className='w-5 aspect-square object-contain  '/>
                    </div>
                </div>
                <div className='text-3xl tracking-tighter  w-[40rem] group '>
                    <div className='flex justify-between pr-4 border-b-1 border-gray-400  hover:bg-orange-600 hover:text-white'>
                    <p className='pl-5 py-6 '>Whatsapp</p>
                    <img src="/footer/img3.svg" alt="" className='w-5 aspect-square object-contain group-hover:hidden '/>
                    <img src="/footer/img4.svg" alt="" className='w-5 aspect-square object-contain hidden group-hover:block'/>
                    </div>
                     <div className='flex justify-between pr-4 border-b-1 border-gray-400  hover:bg-orange-600 hover:text-white'>
                    <p className='pl-5 py-6 '>X</p>
                   <img src="/footer/img3.svg" alt="" className='w-5 aspect-square object-contain group-hover:hidden '/>
                    <img src="/footer/img4.svg" alt="" className='w-5 aspect-square object-contain hidden group-hover:block'/>
                    </div>
                     <div className='flex justify-between pr-4 border-b-1 border-gray-400  hover:bg-orange-600 hover:text-white'>
                    <p className='pl-5 py-6 '>Linkedin</p>
                    <img src="/footer/img3.svg" alt="" className='w-5 aspect-square object-contain group-hover:hidden '/>
                    <img src="/footer/img4.svg" alt="" className='w-5 aspect-square object-contain hidden group-hover:block'/>
                    </div>
                     <div className='flex justify-between pr-4 border-b-1 border-gray-400  hover:bg-orange-600 hover:text-white'>
                    <p className='pl-5 py-6 '>Instagram</p>
                    <img src="/footer/img3.svg" alt="" className='w-5 aspect-square object-contain group-hover:hidden '/>
                    <img src="/footer/img4.svg" alt="" className='w-5 aspect-square object-contain hidden group-hover:block'/>
                    </div>
                     <div className='flex justify-between pr-4 border-b-1 border-gray-400  hover:bg-orange-600 hover:text-white'>
                    <p className='pl-5 py-6 '>Email</p>
                   <img src="/footer/img3.svg" alt="" className='w-5 aspect-square object-contain group-hover:hidden '/>
                    <img src="/footer/img4.svg" alt="" className='w-5 aspect-square object-contain hidden group-hover:block'/>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Footer
