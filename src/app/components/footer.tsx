
"use client"
import React,{useState, Fragment} from 'react'
import { SocialIcon } from 'react-social-icons'

import {ChatBubbleLeftIcon,ChevronDownIcon,ChevronUpIcon ,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"; 
import Link from 'next/link';

function Footers() {
    const [helpage, setHelppage]= useState('none');
    const [bodypage, setBodypage]= useState('');
    const [foot, setFoot]= useState('hidden');
  
    function helproute() {
      if(helpage =="none") {
        setHelppage(" ")
        setBodypage('none')
        setFoot('block')
      }
    }
    function bodyproute() {
      if(bodypage =="none") {
        setHelppage("none")
        setBodypage('')
        setFoot('hidden')
      }
    }
  return (
    <div className='  text-white bg-[#a22a2b] mt-1 h-auto w-full md:w-full  lg:w-full '>
                        <div className='flex p-5 gap-x-[50%] md:hidden lg:hidden '>
                            <div>
                            <img 
                            className="w-[200px] h-auto"
                            src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
                            alt=""/>
                            </div>
                            <div className='flex  text-[23px] font-medium hover:cursor-pointer'>
                            <a href="#footerss"> <div style={{display:helpage}} onClick={bodyproute} className='flex '>
                              <p>Etendre</p>
                                <ChevronDownIcon                             
                                    className='h-9 w-9  flex-none text-[#ffffff]  font-bold'
                                    aria-hidden="true"/>
                              </div></a>
                              <div style={{display:bodypage}} onClick={helproute} className='flex'>
                              <p>Reduire</p>
                                <ChevronUpIcon                             
                                    className='h-9 w-9  flex-none text-[#ffffff]  font-bold'
                                    aria-hidden="true"/>
                              </div>
                            </div>
                        </div>
                    <div style={{display:bodypage}} className={`block lg:flex md:flex p-4 md:p-5 lg:px-5 lg:py-2   items-center mx-auto`}>
                    <div className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                    <div className='px-0 md:px-6 gap-y-5 h-[270px] w-[200px] md:w-auto'>
                        <p className='mt-2 lg:pb-3 text-[12px] lg:text-[15px] '>CONTACT</p>

                        <p className='mt-2 text-[12px] lg:text-[15px]'>Email: diaspora@equitybcdc.cd</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Service d’Assistance Clientèle en ligne</p> 
                        <p className='mt-2 text-[12px] lg:text-[15px]'>+243-996-018-000</p> 
                       
                    </div >
                    <div className="px-0 md:px-6 gap-y-5 h-[270px] md:mt-5 lg:mt-0 w-[200px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>ACCUEIL</p>
                        <Popover.Group className="flex lg:gap-x-12">
                          <Popover className="relative">
                            <Popover.Button  className=" outline-none items-center gap-x-4 text-[12px] lg:text-[15px]   text-[#fff] border-none hover:border-none"> {/* onClick={changes} */}
                            <p   className='hidden lg:flex text-start'>Nos produits Diaspora</p>
                            <p className='block lg:hidden'>Produits Diaspora</p>
                              {/* <ChevronDownIcon         
                                className='h-7 w-7  flex-none text-[#fff] text-[15px] font-bold'
                                aria-hidden="true"
                              /> */}
                              <div className='px-[1vw] space-y-[10px]'>
                                <div  className='hover:scale-110 transition duration-300 hover:ease-in '>
                                <Link href="/web1/credit" ><p>- Comptes</p></Link>
                                </div>
                                <div  className='hover:scale-110 transition duration-300 hover:ease-in '>
                                <Link href="/web1/cartebancaire" ><p>- Cartes Bancaires</p></Link>
                                </div>
                                <div  className='hover:scale-110 transition duration-300 hover:ease-in '>
                                <Link href="/web1/packdiaspora" ><p>- Packs Diaspora</p></Link>
                                </div>
                                
                              </div>
                            </Popover.Button>
                            {/* <Transition
                              as={Fragment}
                              enter="transition ease-out duration-700"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute bg-white  top-full z-10 mt-0 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
                                <div className=" gap-y-3">
                                
                              <div className="w-full pl-2 py-3 mt-0 bg-[#ececec]" > <Link href="/web1/credit">
                  <div  className="w-full pl-2 py-3 mt-1 text-black  ">

                  <p className={` text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                    Comptes</p> 
                 
                  </div> </Link>
                  <Link href="/web1/cartebancaire">
                  <div  className="w-full pl-2 py-3 mt-1 text-black ">

                  <p className={`  text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                  Cartes Bancaires</p> 
                 
                  </div> </Link>
                  <Link href="/web1/packdiaspora">
                  <div  className="w-full pl-2 py-3 mt-1 text-black ">

                  <p className={` text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                  Packs Diaspora</p> 
                 
                  </div> </Link></div> 
                                  
                                </div>

                              </Popover.Panel>
                            </Transition> */}
                          </Popover>
                          </Popover.Group>
                          <Popover.Group className="flex lg:gap-x-12">
                          <Popover className="relative">
                            <Popover.Button  className=" outline-none items-center gap-x-4 text-[12px] lg:text-[15px] text-start text-[#fff] border-none hover:border-none"> {/* onClick={changes} */}
                            Nos offres de Prêts
                              {/* <ChevronDownIcon         
                                className='h-7 w-7  flex-none text-[#fff] text-[15px] font-bold'
                                aria-hidden="true"
                              /> */}
                               <div className='px-[1vw] space-y-[10px]'>
                                <div  className='hover:scale-110 transition duration-300 hover:ease-in '>
                                <Link href="/web1/pretImmo" ><p>- Prêt Immo Diaspora</p></Link>
                                </div>
                                <div  className='hover:scale-110 transition duration-300 hover:ease-in '>
                                <Link href="/web1/simulateur" ><p>- Simulateurs</p></Link>
                                </div>
                                
                              </div>
                            </Popover.Button>

                            {/* <Transition
                              as={Fragment}
                              enter="transition ease-out duration-700"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute bg-white  top-full z-10 mt-0 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
                                <div className=" gap-y-3">
                                
                              <div className="w-full pl-2 py-3 mt-0 bg-[#ececec]" > <Link href="/web1/pretImmo">
                  <div  className="w-full pl-2 py-3 mt-1 text-black  ">

                  <p className={` text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                  Prêt Immo Diaspora</p> 
                 
                  </div> </Link>
                  <Link href="/web1/simulateur" >
                  <div  className="w-full pl-2 py-3 mt-1 text-black ">

                  <p className={`  text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                  Simulateurs</p> 
                 
                  </div> </Link>
                  </div> 
                                  
                                </div>

                              </Popover.Panel>
                            </Transition> */}
                          </Popover>
                          </Popover.Group>

              
                    </div>
                    <div className="px-0 md:px-6 gap-y-5 h-[270px] md:mt-5 lg:mt-0 w-[200px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>A propos</p>
                        <Popover.Group className="flex lg:gap-x-12">
                          <Popover className="relative">
                            <Popover.Button  className=" outline-none items-center gap-x-4 text-[12px] lg:text-[15px]   text-[#fff] border-none hover:border-none"> {/* onClick={changes} */}
                         
                              <div className='px-[1vw] space-y-[10px]'>
                                <div  className='hover:scale-110 transition duration-300 hover:ease-in '>
                                <Link href="/web1/diasporabanking" ><p>-     À propos de nous</p></Link>
                                </div>
                                <div  className='hover:scale-110 transition duration-300 hover:ease-in '>
                                <Link href="/web1/portailclient" ><p>-  Le portail Client</p></Link>
                                </div>
                           
                              </div>
                            </Popover.Button>
                            {/* <Transition
                              as={Fragment}
                              enter="transition ease-out duration-700"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute bg-white  top-full z-10 mt-0 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
                                <div className=" gap-y-3">
                                
                              <div className="w-full pl-2 py-3 mt-0 bg-[#ececec]" > <Link href="/web1/credit">
                  <div  className="w-full pl-2 py-3 mt-1 text-black  ">

                  <p className={` text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                    Comptes</p> 
                 
                  </div> </Link>
                  <Link href="/web1/cartebancaire">
                  <div  className="w-full pl-2 py-3 mt-1 text-black ">

                  <p className={`  text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                  Cartes Bancaires</p> 
                 
                  </div> </Link>
                  <Link href="/web1/packdiaspora">
                  <div  className="w-full pl-2 py-3 mt-1 text-black ">

                  <p className={` text-[15px] leading-6   border-b-[2px] w-fit hover:border-b-[#a22a2b] border-b-[#ececec] hover:text-[#a22a2b] `}  onClick={bodyproute}>
                  Packs Diaspora</p> 
                 
                  </div> </Link></div> 
                                  
                                </div>

                              </Popover.Panel>
                            </Transition> */}
                          </Popover>
                          </Popover.Group>
                          
                    </div>
                    </div>
                   <div className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                   <div className="px-0 md:px-6 gap-y-5 h-[270px] w-[200px] md:w-auto">
                        <p className='mt-2 lg:pb-3  text-[12px] lg:text-[15px] '>ACTUALITÉS</p>
                        <p className='text-[12px] lg:text-[15px]'>Nouveautés</p>
                        <p className='text-[12px] lg:text-[15px]'>Communique de presse</p>
                       
                    </div>
                    {/* <div className="px-0 md:px-6 gap-y-5 h-[270px] md:mt-5 lg:mt-0 w-[200px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>QUI SOMMES-NOUS?</p>
                        <p className='text-[12px] lg:text-[15px]'>A propos de EquityBCDC</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Nos partenaires</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Relations avec les investisseurs</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Carrieres</p>
                    </div> */}
                   </div>

                    <div id='footerss' className='flex gap-x-9 lg:gap-x-0 md:block lg:flex lg:pb-10'>
                    <div className="px-0 md:px-6 gap-y-5 h-[270px] w-[200px] md:w-auto">
                        <p className='mt-2  lg:pb-3 text-[12px] lg:text-[15px] '>HORAIRE DE L'AGENCE</p>
                        <p className='text-[12px] lg:text-[15px]'>Du lundi au vendredi : 8h30 à 16h00</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Samedi : sur rendez-vous uniquement</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>Dimanche/jours fériés : fermée</p>
                        <p className='mt-2 text-[12px] lg:text-[15px]'>55 Bd du 30 Juin, Kinshasa, Gombe</p>
                    </div>
                    <div className="px-0 md:px-6 gap-y-5 h-[270px] md:mt-5 lg:mt-0 w-[200px] md:w-auto">
                    <div className="flex py lg:pb-3 -1 gap-x-0">
                    <div><SocialIcon url="https://www.facebook.com/EquityBCDC/" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }} /></div>
                    <div><SocialIcon url="https://twitter.com/EquityBCDC" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }}  /></div>
                    <div><SocialIcon url="https://www.linkedin.com/company/equitybcdc/" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }} /></div>
                    <div><SocialIcon url="https://www.instagram.com/equitybankcongo/" fgColor='#fff' bgColor='transparent' style={{ height: 44, width: 44 }} /></div>
                    </div>
                    </div>
                    </div>
                 
                    </div>
                    <div className='w-full bg-[#221f1f]'>
                            <div className='py-7 text-[13px] gap-x-[80px]  lg:flex px-8 text-white hover:text-[rgb(244, 171, 122)]'>
                               <div className='flex gap-x-[30%] md:gap-x-[80px]'>
                               <p>Privacy Policy</p>
                                <p>Terms and Conditions</p>
                               </div>
                                <div className='md:flex gap-x-[80px]'>
                                <p className='mt-2 md:mt-0'>Equity BCDC est régie par la Banque Centrale du Congo</p>
                                <p className='mt-1 md:mt-0'>Langue:Francais, Switch to English</p>
                                <p className='mt-1 md:mt-0'>© Equity BCDC 2024</p>
                                </div>
                            </div>
                    </div>
                  </div>
  )
}

export default Footers