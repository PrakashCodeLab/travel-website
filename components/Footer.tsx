import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants/constants.index';
import { link } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';
import React from 'react';
import Logo from '/public/hilink-logo.svg';
const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <footer className='flexCenter mt-24 '>
        <div className="padding-container max-container flex w-full flex-col gap-14 ">
            <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row  ">
                <Link href="/" className='mb-10' >
                  <Image src={Logo} width={75} height={29} alt="logo" />
                </Link>

                <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 '>
                  {
                    FOOTER_LINKS.map((columns)=>(
                      <FooterColumn key={columns.title} title={columns.title}>  
                         <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                             {
                              columns.links.map((link)=>(
                                <Link key={link} href="/">
                                    {link}
                                </Link>
                              ))
                             }
                         </ul>
                      </FooterColumn>
                    ))
                  }

                  <div className='flex flex-col gap-5'>
                      <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                            {
                              FOOTER_CONTACT_INFO.links.map((link)=>(
                                <Link href={'/'} key={link.label}>
                                     <p className='whitespace-nowrap'>
                                      {
                                        link.label
                                      }
                                     </p>
                                     <p className='medium-14 whitespace-nowrap text-blue-70'>
                                      {
                                        link.value
                                      }
                                     </p>
                                </Link>
                              ))
                            }
                      </FooterColumn>
                  </div>
                  <div className='flex flex-col gap-5 '>
                      <FooterColumn title={SOCIALS.title}>
                         <ul className='regular-14 flex gap-4 text-gray-30'>
                             {SOCIALS.links.map((link)=>(
                                    <Link key={link} href="/">
                                        <Image src={link} alt="logo" width={24} height={24} />
                                    </Link> 
                             ))}
                         </ul>
                      </FooterColumn>
                  </div>
                </div>
            </div>
            <div className='border bg-gray-20'/>
              <p className='regular-14 w-full text-center text-gray-30 pb-6'><span>{currentYear}</span> hilink | All rights reserved</p>
            
        </div>
    </footer>
  );
}

type FooterProps ={
  title:string;
  children:React.ReactNode
}


const FooterColumn =({title , children}:FooterProps)=>{
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer;