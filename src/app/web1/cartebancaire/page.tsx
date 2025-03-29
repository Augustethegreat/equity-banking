"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import carteRed from './img/cartebank.png'
import carteBlack from './img/carte.png'
import card1 from "../img/Ms_prepaid.jpg"
import card2 from "../img/Ms_credit.jpg"
import card3 from "../img/visa_classic.jpg"
import card4 from "../img/visa_gold.jpg"
import card5 from "../img/visa_platinum.jpg"
import card6 from "../img/visa_infinite.jpg"
import card7 from "../img/world-elite-front.jpg"
import card8 from "../img/MS_debit.jpg"
import { Dialog } from '@headlessui/react'
export default function CarteBancaire() {

    const [loginOpen, setLoginOpen] = useState(false);
    const [loginOpen1, setLoginOpen1] = useState(false);
    const [loginOpen2, setLoginOpen2] = useState(false);
    const [loginOpen3, setLoginOpen3] = useState(false);
    const [loginOpen4, setLoginOpen4] = useState(false);
    const [loginOpen5, setLoginOpen5] = useState(false);
    const [loginOpen6, setLoginOpen6] = useState(false);
    const [loginOpen7, setLoginOpen7] = useState(false);
    const [loginOpen8, setLoginOpen8] = useState(false);
    const [loginOpen9, setLoginOpen9] = useState(false);
    const[comptepage, setComptepage]= useState('')

    const [shadow, setShadow] = useState('none')
    useEffect(() => {
      function HideShadow() {
        if (loginOpen || loginOpen1 || loginOpen2 || loginOpen3 || loginOpen4 || loginOpen5 || loginOpen6 || loginOpen7 || loginOpen8 || loginOpen9) {
          setShadow('');
        } else {
          setShadow('none');
        }
      }
  
      HideShadow();
    }, [loginOpen, loginOpen1, loginOpen2, loginOpen3, loginOpen4, loginOpen5, loginOpen6, loginOpen7, loginOpen8, loginOpen9],);
  return (
    <div className='space-y-5 py-10 bg-[#fff]'>
           <div className='w-full bg-[#000] h-[1000vw] lg:h-[319vw] absolute bg-opacity-50 -mt-[50vw] 'style={{display:shadow}} >

           </div>
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5' >
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000] '>
                
                <p className='text-xl font-semibold w-full py-3 text-center text-black  rounded-t-[10px]'>Mastercard prépayée</p>
                                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card1} className='w-full h-[200px]' alt='' />
                
                   
                </div>
                <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                    <button className='py-3   w-full rounded-bl-[15px]'>Cartes prépayées</button>
                     <button onClick={() => setLoginOpen2(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000] '>
                
                <p className='text-xl font-semibold w-full py-3 text-center text-black rounded-t-[10px]'>Mastercard Crédit </p>
                {/* <p className='text-base font-semibold px-4 text-[#ffffff] absolute'>Cartes de crédit</p>  */}
                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card2} className='w-full h-[200px]' alt='' />

                   
                </div>
                <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                    <button className='py-3   w-full rounded-bl-[15px]'>Cartes de crédit</button>
                     <button onClick={() => setLoginOpen3(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000] '>
                
                <p className='text-xl font-semibold w-full py-3 text-center text-black  rounded-t-[10px]'>Mastercard Débit </p>
                <p className='text-base font-semibold px-4 text-[#636569]'></p> 
                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[24vw] h-auto '>
                <Image src={card8} className='w-full h-[200px]' alt='' />

                
                   
                </div>
                <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                    <button className='py-3  w-full rounded-bl-[15px]'>Cartes débit</button>
                     <button onClick={() => setLoginOpen9(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                    </div>
            </div>
        </div>
       
        </div>

      
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5 '>
        <div className='shadow-xl rounded-[10px]'>
              {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
              <div className='text-[#000] '>
                  
                  <p className='text-xl font-semibold w-full py-3 text-center text-black  rounded-t-[10px]'>Mastercard World Elite</p>
                  <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                  <Image src={card7} className='w-full h-[200px]' alt='' />
  
                  </div>
                  <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                      <button className='py-3  w-full rounded-bl-[15px]'>Cartes Prestiges</button>
                       <button onClick={() => setLoginOpen8(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                      </div>
              </div>
          </div>

          
  
          <div className='shadow-xl rounded-[10px]'>
              {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
              <div className='text-[#000] '>
                  
                  <p className='text-xl font-semibold w-full py-3 text-center text-black  rounded-t-[10px]'>Visa Platinum</p>
                  <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                  <Image src={card5} className='w-full h-[200px]' alt='' />
  
                      
                     
                     
                  </div>
                  <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                      <button className='py-3  w-full rounded-bl-[15px]'>Cartes Prestiges</button>
                       <button onClick={() => setLoginOpen6(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                      </div>
              </div>
          </div>
  
          <div className='shadow-xl rounded-[10px]'>
              {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
              <div className='text-[#000] '>
                  
                  <p className='text-xl font-semibold w-full py-3 text-center text-black  rounded-t-[10px]'>Visa Infinite </p>
                  <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                  <Image src={card6} className='w-full h-[200px]' alt='' />
     
                      
                      
                     
                     
                  </div>
                  <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                      <button className='py-3  w-full rounded-bl-[15px]'>Cartes Prestiges</button>
                       <button onClick={() => setLoginOpen7(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                      </div>
              </div>
          </div>
         </div>

         <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5 '>
          
         
  
         <div className="shadow-xl rounded-[10px]">
    <div
        className="text-[#000] "
        
    >
        <p className="text-xl font-semibold w-full py-3 text-center text-black rounded-t-[10px]">
            Visa Classique
        </p>
        <div className="text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto">
            <Image src={card3} className="w-full h-[200px]" alt="" />
        </div>
        <div className="border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center">
            <button className="py-3 w-full rounded-bl-[15px] whitespace-nowrap">
                Cartes internationales
            </button>
            <button onClick={() => setLoginOpen4(true)} className="py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px] whitespace-nowrap">
                Voir +
            </button>
        </div>
    </div>
</div>


          <div className='shadow-xl rounded-[10px]'>
              {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
              <div className='text-[#000] '>
                  
                  <p className='text-xl font-semibold w-full py-3 text-center text-black  rounded-t-[10px]'>Visa Gold</p>
                  <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                  <Image src={card4} className='w-full h-[200px]' alt='' />
  
                  </div>
                  <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                      <button className='py-3  w-full rounded-bl-[15px]'>Cartes internationales</button>
                       <button onClick={() => setLoginOpen5(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                      </div>
              </div>
          </div>
  
          <div className='shadow-xl rounded-[10px] opacity-0'>
              {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
              <div className='text-[#000] '>
                  
                  <p className='text-xl font-semibold w-full py-3 text-center text-black  rounded-t-[10px]'>Visa Infinite </p>
                  <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                  <Image src={card6} className='w-full h-[200px]' alt='' />
     
                      
                      
                     
                     
                  </div>
                  <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center'>
                      <button className='py-3  w-full rounded-bl-[15px]'>Cartes Prestiges</button>
                       <button onClick={() => setLoginOpen7(true)} className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Voir +</button>
                       
                      </div>
              </div>
          </div>
         </div>
     
       
        


        
        {/* <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
        </div> */}
        
     
{/* 
        <div style={{display:''}} className='bg-[#000] z-30 opacity-50 w-full mt-[-2000px] h-[7100px] lg:mt-[-180vw]'>

       </div> */}

        <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen2}
      onClose={setLoginOpen2}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Mastercard prépayée</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

              <p>- Prix : 10 USD + <span className='font-bold'>TVA 16%</span></p>
              <p>- Limite journalière retrait : 2500 USD</p>
              <p>- Limite dépôt : 5000 USD / jour</p>
              <p>- Frais de retrait : 3 % + <span className='font-bold'>TVA 16%</span></p>
              <p>- RSC : 0.2 %</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>
    
    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen3}
      onClose={setLoginOpen3}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Mastercard Crédit</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

          <p>- Prix : 50 USD + <span className='font-bold'>TVA 16%</span></p>
          <p>- Limite journalière retrait : 5000 USD</p>
          <p>- Frais de retrait : 3 % + <span className='font-bold'>TVA 16%</span></p>
          <p>- La limite de la carte de crédit correspond au montant du crédit octroyé.</p>
          <p>- RSC : 0.2 %</p>
          <p>Le client peut demander une limite supérieure à 5000 USD</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen4}
      onClose={setLoginOpen4}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Classique</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

          <p>- Prix : 30 USD + <span className='font-bold'>TVA 16%</span></p>
          <p>- Limite journalière retrait : 2500 USD</p>
          <p>- Limite par paiement : 4500 USD</p>
          <p>- Frais de retrait : 3 % du montant + <span className='font-bold'>TVA 16%</span></p>
          <p>- RSC : 0.2 %</p>
          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen5}
      onClose={setLoginOpen5}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Gold</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

          <p>- Prix : 75 USD + <span className='font-bold'>TVA 16%</span></p>
          <p>- Limite journalière retrait : 5000 USD</p>
          <p>- Limite par paiement : 7500 USD</p>
          <p>- Frais de retrait : 3 % du montant + <span className='font-bold'>TVA 16%</span></p>
          <p>- RSC : 0.2 %</p>
          <p>Le client peut demander une limite supérieure à 5000 et 7500 USD </p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen6}
      onClose={setLoginOpen6}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Platinum</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

          <p>- Prix : 150 USD + <span className='font-bold'>TVA 16%</span></p>
          <p>- Limite journalière retrait : 5000 USD</p>
          <p>- Limite par paiement : 15000 USD</p>
          <p>- Frais de retrait : 3 % du montant + <span className='font-bold'>TVA 16%</span></p>
          <p>- RSC : 0.2 %</p>
          <p>Le client peut demander une limite supérieure à 5000 et 15000 USD</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen7}
      onClose={setLoginOpen7}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Infinite</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

     
          <p>- Prix : 300 USD + <span className='font-bold'>TVA 16%</span></p>
          <p>- Limite journalière retrait : 9900 USD</p>
          <p>- Limite par paiement : 15000 USD</p>
          <p>- Frais de retrait : 3 % du montant + <span className='font-bold'>TVA 16%</span></p>
          <p>- RSC : 0.2 %</p>
          <p>- Le client peut demander une limite supérieure à 9900 et 15000 USD</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen8}
      onClose={setLoginOpen8}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Mastercard World Elite</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

     
          <p>- Prix : 350 USD + <span className='font-bold'>TVA 16%</span></p>
          <p>- Limite journalière retrait : 9900 USD</p>
          <p>- Limite paiement : 15000 USD</p>
          <p>- Frais de retrait : 3 % du montant + <span className='font-bold'>TVA 16%</span></p>
          <p>- RSC : 0.2 %</p>
          <p>Le client peut demander une limite supérieure à 15000 USD</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen9}
      onClose={setLoginOpen9}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Mastercard débit</p>
         
          <div className='px-[5vw] py-[2vw] text-black '>

     
              <p>- Prix de la carte : 30 USD + <span className='font-bold'>TVA 16%</span></p>
              <p>- Limite journalière retrait : 2500 USD</p>
              <p>- Paiement en ligne : 3500 USD</p>
              <p>- Frais de retrait : 3 % du montant + <span className='font-bold'>TVA 16%</span></p>
              <p>- RSC : 0.2 %</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    </div>
  )
}
