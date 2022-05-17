import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';


function Footer() {
  return (
    <footer className="inset-x-0 bottom-0 bg-neutral-900 h-24 font-poppins text-white flex flex-col md:flex-row justify-around items-center">
      <span className='hidden md:block text-lg font-semibold'>BrandName</span>
      <span className='flex flex-col md:flex-row order-last items-center'>
        <span> <CopyrightIcon />  BrandName 2022. </span>
        <span className='md:pl-1'> All Rights and Wrongs Reserved. </span>
      </span>
      <span className='w-36 flex justify-between md:order-last'>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </span>
    </footer>
  )
}

export default Footer;