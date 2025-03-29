import React from 'react'
import pic from "../component/img/2048x2048pxOK.jpg"
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from 'next/link'
export default function About2() {
  return (
    <div  className='text-center items-center justify-center flex mx-auto pb-[50px] text-black overflow-x-hidden'>
    <div  className='text-center items-center justify-center mx-auto'>
        <p className='text-[35px] font-medium py-4 text-center'>NOTRE PORTAIL CLIENT</p>
      <div className='block lg:flex gap-x-[100px] mt-[20px] px-5 md:px-0'>
       <motion.div initial={{x: -200, opacity:0}}
                         whileInView={{x:0, opacity:1}}
                   transition={{duration:1.2}}
                   viewport={{once:true}} className='items-center justify-center flex mx-auto '>
       <Image src={pic} className='text-white w-full h-auto md:h-[600px] shadow-xl rounded-[15px] md:w-auto' alt=''/>
       </motion.div>
       <motion.div initial={{x: 200, opacity:0}}
                         whileInView={{x:0, opacity:1}}
                   transition={{duration:1.2}}
                   viewport={{once:true}} className='h-auto lg:h-[600px] items-center justify-center mx-auto mt-0'>
         <div className='mt-[50px] lg:mt-0'>
           <p className='text-[25px] font-medium text-start text-[#a22a2b]'>C’est quoi le Portail Diaspora Banking ?</p>
         <p className='text-[15px] font-normal text-start px-0 md:px-[140px]  lg:px-0  w-full lg:w-[700px]  mt-1 '>Le portail Diaspora Banking est une plateforme en ligne qui vous permet d'effectuer un nombre d’opérations bancaires à distance dans votre confort. C’est l’équivalent d’une agence en ligne 24h/24 où vous pouvez initier des demandes de service à la diaspora Banking.</p>
         </div>
         <div className='mt-2'>
           <p className='text-[25px] font-medium text-start text-[#a22a2b]'>Quelles opérations y sont disponibles ?</p>
         <p className='text-[15px] font-normal text-start px-0 md:px-[140px]  lg:px-0  w-full lg:w-[700px]  mt-1 '>Il y a présentement 5 types d’opérations disponibles sur le Portail Diaspora Banking :</p>
         </div>
         <div className='mt-2'>
           <p className='text-[20px] font-medium text-start text-[#a22a2b]'>- Les ouvertures de compte</p>
         <p className='text-[15px] font-normal text-start px-0 md:px-[140px]  lg:px-0  w-full lg:w-[700px]  mt-1 '>Voulez-vous ouvrir un compte Diaspora Banking à distance ? Vous pouvez vous enregistrer à notre portail Banking et suivre les suggestions appropriées pour soumettre votre demande d’ouverture de compte partout où vous êtres dans le monde.</p>
         </div>

         <div className='mt-2'>
           <p className='text-[20px] font-medium text-start text-[#a22a2b]'>- Les réactivations de compte</p>
         <p className='text-[15px] font-normal text-start px-0 md:px-[140px]  lg:px-0  w-full lg:w-[700px]  mt-1 '>Si votre compte est inactif et vous désirez le réactiver, vous pouvez aussi vous enregistrer et soumettre votre demande de réactivation dans le portail.  </p>
         </div>

         <div className='mt-2'>
           <p className='text-[20px] font-medium text-start text-[#a22a2b]'>- Les commandes des cartes</p>
         <p className='text-[15px] font-normal text-start px-0 md:px-[140px]  lg:px-0  w-full lg:w-[700px]  mt-1 '>Les commandes de nouvelles cartes sont aussi disponibles dans le portail.</p>
         </div>
         <div className='mt-2'>
           <p className='text-[20px] font-medium text-start text-[#a22a2b]'>- Les commandes de nos produits digitaux</p>
         <p className='text-[15px] font-normal text-start px-0 md:px-[140px]  lg:px-0  w-full lg:w-[700px]  mt-1 '>Nos produits digitaux sont accessibles via notre portail.</p>
         </div>
         <div className='mt-2'>
           <p className='text-[20px] font-medium text-start text-[#a22a2b]'>- Les demandes de Prêts IMMO</p>
         <p className='text-[15px] font-normal text-start px-0 md:px-[140px]  lg:px-0  w-full lg:w-[700px]  mt-1 '>Si vous désirez un accompagnement de prêts IMMO et que vous êtes prêts à vous engager, vous pouvez aussi vous enregistrer et soumettre votre demande de prêt.</p>
         </div>
        
       </motion.div>
       
     </div>
     <div className=' mt-10 lg:mt-8'>
     <p className='text-center font-medium text-[27px] md:text-[35px]  '>Comment s’enregistrer ?</p>
     <p className='text-center px-[20px] md:px-[100px]  lg:px-0'>Pour vous enregistrer,<a className='underline text-[#a22a2b]' href="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/">cliquez sur ce lien </a>   et suivez les recommandations.</p>

     </div>
  </div>
</div>
  )
}
