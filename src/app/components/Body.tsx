"use client"
import { useState,useEffect } from 'react';
import Slideshow from './Carousel'
import head1 from "./img/head1.jpg"
import themobile from "./img/themobile.jpg"
import head2 from "./img/head2.jpg"
import head3 from "./img/head3.jpg"
import head4 from "./img/head4.png"
import smallhead from "./img/smallhead.png"
import pic1 from "./img/pic1.png"
import pic2 from "./img/pic2.png"
import pic6 from "./img/pic6.jpg"
import pic3 from "./img/slidepic.png"
import acc from "./img/acc.jpg"
import deals from "./img/deals.jpg"
import appsell from "./img/theappsell.png"
import Footers from './footer'
import Image from 'next/image'
import cap1 from "./img/cap1.png"
import cap2 from "./img/cap2.png"
import cap3 from "./img/cap3.png"
import cap4 from "./img/cap4.png"
import cap5 from "./img/cap5.png"
import cap6 from "./img/cap6.png"
import img1 from "./img/acc1.jpg"

const heads = [head1,head2, head3, head4];
function TheBody() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heads.length);
    }, 20000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' flex  min-w-screen ' >
      <div className="flex justify-center mx-auto items-center">
     <div className="pb-[100px] md:w-full   lg:px-[10%]">
      <div className=''>
      <p className='text-[#a22a2b] px-4 md:px-10 lg:px-0 lg:max-w-screen-lg  font-medium text-[15px] md:text-[22px] leading-tight md:text-lg lg:text-[28px] mt-4'>Bonjour,</p> 
     <p className='text-[#272828]  mt-2 px-4 md:px-10 lg:px-0  font-medium text-[15px] md:text-[22px] leading-tight lg:text-[28px] '>
        Découvrez le compte Diaspora, votre compte bancaire maintenu à l'étranger en toute sécurité …</p>

      </div>
     
     <div className='w-full   hidden md:w-full     lg:px-[0]    lg:w-full h-[200px] md:flex lg:flex'>
     <div className=' rounded-[10px]'>
     {heads.map((image, index) => (
        
        <img
        key={index}
        src={image.src}
        alt={`Slide ${index + 1}`}
        className={` absolute  transition-opacity duration-1000 w-full lg:px-0 md:px-[5%]  md:rounded-[10px] md:w-full lg:w-[80%] md:h-auto lg:h-auto mt-4  lg:rounded-2xl ${
          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
        } ${index === currentImageIndex ? 'ease-in' : 'ease-out'}`}
      />
     
    ))}
     </div>
     </div>
      {/* {/* <img src={head1.src} className=' w-full hidden lg:flex md:flex md:w-[800px] lg:w-[1105px] md:h-auto lg:h-auto mt-10 lg:rounded-2xl  '  alt=''  /> */}
      <div className='px-4'>
      <img src={cap6.src} className=' w-full  rounded-[10px] md:hidden lg:hidden  mt-10   '  alt=''  />
      </div>
             
  <p className='text-[#a22a2b] px-3 font-medium text-xl lg:text-[28px]  py-10 text-center'>        
               Restez au courant des dernières nouvelles et des produits Equity BCDC.
            </p>
          <div className='px-4 md:px-10 lg:px-0'>
            <Slideshow/>
          </div>
          <div className='block md:block md:px-8  lg:flex px-4 md:w-full lg:px-0 md:gap-x-2 items-center mx-auto  mt-10 pb-3 ' >
              <div className='border-[1px]  items-center mx-auto py-4 w-full px-0 md:w-full lg:w-full mt-3 md:mt-0  bg-[#ffffff]'>
              <span className='flex gap-x-2 px-3'>
              <img src={acc.src} className='w-[80px]   lg:w-[25%] h-auto px-1 md:px-0 '  alt=''  />
              <div className=' text-[#272828] '>
                <p className='font-semibold  text-sm'>Vous n'avez pas de compte ?</p>
                <p className=' w-full  font-normal md:px-0 lg:px-0    lg:w-[100%]   text-[11px] md:text-[15px] lg:text-[13px]'>Créez un compte pour ouvrir et gérer votre compte
                    bancaire, facilement et en toute sécurité. Commandez
                    votre carte, soumettez une demande de prêt et
                    commandez nos produits numériques disponible sur
                    notre portail.  </p>
             
              </div>
              </span>
              <a href="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/register">
             
              <div className='flex items-center mx-auto justify-center mt-0 py-2 px-10 md:px-10 lg:px-0 md:py-0 lg:py-0'>
             <button className='bg-[#a22a2b] hover:bg-[#d73611] w-full rounded-[5px] lg:w-[190px] h-[40px] text-[11px] font-bold text-white '>CREER VOTRE COMPTE</button>
            
                </div> </a>
              </div>
              <div className='border-[1px] items-center mx-auto py-4 w-full px-0  lg:w-full mt-3 md:mt-3 lg:mt-0  bg-[#fff]'>
              <span className='flex gap-x-2 px-3'>
              <img src={deals.src}  className='w-[80px]   lg:w-[25%] h-auto px-1 md:px-0 '   alt=''  />
              <div className=' text-[#272828] '>
                <p className='font-semibold  text-sm  '>Abonnez-vous à nos newsletters !</p>
                <p className=' w-full md:px-0 lg:px-0  font-normal px-1   lg:w-[100%]   text-[11px] md:text-[15px] lg:text-[13px]'>Recevez des offres exclusives et des mises à jour sur
                  nos produits DIASPORA. Soyez le premier informé de
                  nos offres spéciales de produits bancaires et de nos
                  concours.</p>
             
              </div>
              </span>
              <div className=' md:flex lg:flex  justify-center mt-2 mt:mt-0 lg:mt-0 pd-3 gap-x-1 md:gap-x-1 lg:gap-x-3'>         
                  <div className='py-2 px-10 md:px-0 lg:px-0 md:py-0 lg:py-0'>
                  <input type="text" name="" id="" placeholder='  Votre Nom ' className='border-[1px] w-full px-2 md:w-[300px] lg:w-[155px] rounded-[4px] border-[#a22a2b] text-[#272828] h-[40px] text-[11px]'/>
                  </div>
                  <div className='py-2 px-10 md:px-0 lg:px-0 md:py-0 lg:py-0'>
                  <input type="text" name="" id="" placeholder='  Votre adresse électronique' className='border-[1px] w-full px-2  md:w-[300px] lg:w-[155px] rounded-[4px] border-[#a22a2b] text-[#272828] h-[40px] text-[11px]'/>
                    </div>                
                  <div className='py-2 px-10 md:px-0 lg:px-0 md:py-0 lg:py-0'>
                  <button className='bg-[#a22a2b] hover:bg-[#d73611] w-full  h-[40px] md:w-[120px] md:h-[40px] rounded-[5px] text-[11px] font-bold text-white'>ENREGISTREZ-VOUS</button>
      
                  </div>
              </div>
              </div>
         
              </div>

              {/* <img src={themobile.src} className=' w-full  md:w-[800px] lg:w-[1105px] md:h-auto lg:h-auto mt-10 lg:rounded-2xl'  alt=''  /> */}
             <div className='md:px-10 lg:px-0 '>
             <img src={cap3.src} className=' hidden md:flex  lg:flex lg:w-full  lg:h-auto mt-10 rounded-[15px] lg:rounded-2xl'  alt=''  />
          
             </div>
          <div className='lg:w-auto md:w-auto w-full px-4'>
          <img src={img1.src} className=' w-full h-[400px] px-0 flex md:hidden lg:hidden rounded-[30px] md:w-[600px] shadow-lg md:mx-auto md:items-center lg:w-0 mt-10 lg:rounded-2xl'  alt=''  />
        
          </div>
            <p className='text-[#a22a2b] px-4 text-xl md:text-2xl lg:text-2xl font-medium mt-10'>C’est quoi Equity BCDC Diaspora ?</p>
        <p className='text-[#272828] mt-2 px-4 text-[11px] md:text-[12px] lg:text-[14px]  '>Conçu pour vous fournir des services quotidiens comme si vous étiez à la maison. Ouvrez votre compte et gardez le contrôle
          depuis n'importe où dans le monde grâce aux services bancaires en ligne tout en gagnant des intérêts et des bonus sur votre
          argent.</p>

          
          

  </div>

    </div>
    
        {/* <Footers/> */}
         </div>
     
  )
}

export default TheBody