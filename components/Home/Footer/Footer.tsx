import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2
         md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>About us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Blog</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Magazine</p>
                 
            </div> 
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Contact</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>SiteMap</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Legal Notice</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Privacy Policy</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Terms & Conditions</p>
                 
            </div> 
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Car Hire</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Activity Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Flight Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Travel Agents</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm
                 hover:text-blue-950'>Tour List</p>
                 
            </div> 
            <div className='space-y-5'>
               <h1 className='text-lg font-bold'>Contact us</h1>
               <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Our Mobile number</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'>+91 9876543210</h1>
               </div>
               <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Our Email Id</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'>Example@gmail.com</h1>
               </div>
                 
            </div> 
         </div>
         {/* bottom Section */}
         <div className='mt-8 w-[80%] mx-auto pt-10 border-t flex flex-col md:flex-row 
          justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyrights 2025 Nextjs .All Rights Reserved</p>
            <div className='mt-4 flex items-center space-x-4 md:mt-0'>
                <span>Social :</span>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaTwitter /></Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaFacebook /></Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaInstagram /></Link>
            </div>
          </div>
    </div>
  )
}

export default Footer