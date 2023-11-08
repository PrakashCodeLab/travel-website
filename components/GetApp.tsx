import React from 'react';
import Button from './Button';
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[50PX]'>
       <div className='get-app xl:rounded-3xl'>
         <div className="z-20 flex-1 w-full  flex flex-col items-start justify-center gap-12 ">
           <h2 className='bold-40 lg:bold-64  xl:max-w-[320px]'>Get for free now !</h2>
           <p className='regular-16 text-gray '>
            Available on ios and android
           </p>
           <div className='w-full flex flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button 
            type="button"
            title='Download app'
            icon='/apple.svg'
            variant='btn_white'
            full
            />
             <Button 
            type="button"
            title='Play Store'
            icon='/android.svg'
            variant='btn_dark_green_outline p-4'
            full
            />
           </div>
         </div>

         <div>
          <Image src="/phones.png" width={550} height={870}  alt="phones"/>
         </div>
       </div>
    </section>
  );
}

export default GetApp;
