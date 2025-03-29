
"use client";
import Link from "next/link";
import Footers from "../components/footer";
import { Fragment, useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon,QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon,ChevronDownIcon,ChevronUpIcon,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { SocialIcon } from 'react-social-icons'
import { cn } from "../lib/utils";
import TheBody from "../components/Body";
import Header from "../components/Header";
import Aide from "../components/Aide";
import Packages from "../components/Packages";
import Credit from "../components/Credit";
import Depot from "../components/Depot";
import About from "../components/About";
import Creditpage from "../components/Creditpage";
import {motion} from "framer-motion"
import "../globals.css"
import About2 from "../components/About2";
import { FaInfoCircle } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
export default function Page1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [changeIcon, setChangeIcon] = useState("none")
  const [changeIcon1, setChangeIcon1] = useState("block")
  const [changeIcon2, setChangeIcon2] = useState("none")
  const [changeIcon3, setChangeIcon3] = useState("block")
  const [changeIcon4, setChangeIcon4] = useState("none")
  const [changeIcon5, setChangeIcon5] = useState("block")

  const [creditpage, setCreditpage]= useState('none');
  const [helpage, setHelppage]= useState('none');
  const [bodypage, setBodypage]= useState('');
  const[packpage, setPackpage] = useState('none');
  const[packcolor, setPackcolor] = useState('black');
  const [creditcolor, setCreditcolor] = useState('black');
  const [depotpage, setDepotpage] = useState('none');
  const [visualpage, setVisualpage] = useState('none');
  const [depotcolor, setDepotcolor] = useState('black')
  const [aboutpage, setAboutpage] = useState('none');
  const [aboutcolor, setAboutcolor] = useState('black')
  const [aboutpage2, setAboutpage2] = useState('none');
  const [shadow, setShadow] = useState('none')

  useEffect(() => {
    function HideShadow() {
      if (loginOpen) {
        setShadow('');
      } else {
        setShadow('none');
      }
    }

    HideShadow();
  }, [loginOpen]);



  function aboutroute() {
    setAboutpage('')
    setAboutcolor('[#a22a2b]')
    setDepotpage('none')
    setDepotcolor('black')
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setPackpage('none')
    setAboutpage2('none')
    setVisualpage('none')
    setPackcolor('black')
    setMobileMenuOpen(false)
    setCreditcolor('black')
  }
  function aboutroute2() {
    setAboutpage('none')
    setAboutcolor('[#a22a2b]')
    setDepotpage('none')
    setDepotcolor('black')
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setPackpage('none')
    setAboutpage2('')
    setVisualpage('none')
    setPackcolor('black')
    setMobileMenuOpen(false)
    setCreditcolor('black')
  }
 
  function creditroute() {
    setCreditpage('')
    setHelppage('none')
    setBodypage('none')
    setVisualpage('none')
    setPackpage('none')
    setPackcolor('black')
    setCreditcolor('[#a22a2b]')
    setMobileMenuOpen(false)
    setDepotpage('none')
    setDepotcolor('black')
    setAboutpage('none')
    setAboutpage2('none')
    setAboutcolor('black')
  }
  function bodyproute() {
    if(bodypage =="none") {
      setHelppage("none")
      setCreditpage('none')
      setBodypage(' ')
      setPackpage('none')
      setPackcolor('black')
      setDepotpage('none')
      setVisualpage('none')
      setDepotcolor('black')
      setAboutpage('none')
      setAboutpage2('none')
      setAboutcolor('black')
    }
  }

  function change() {
    if(changeIcon2 =="none") {
      setChangeIcon2("block")
      setChangeIcon3("none")
    }
    else{
      setChangeIcon2("none")
      setChangeIcon3("block")
    }
}
function changearrowabout() {
  if(changeIcon4 =="none") {
    setChangeIcon4("block")
    setChangeIcon5("none")
  }
  else{
    setChangeIcon4("none")
    setChangeIcon5("block")
  }
}


return(
    <div>
      
  <div  className=" h-15 border-b-2  bg-[#fff]   ">
        <nav className="mx-auto hidden md:hidden lg:flex w-full text-[#f5f4f4] items-center justify-end p-1 lg:px-[150px] border-b-[1px] border-b-[#a22a2b] bg-[#fff] "
        aria-label="Global" >
            <div className="flex  gap-x-2  float-right ml-[50%] text-sm">
             <div className="py-2 px-2 hover:bg-[#ffffff]">
             <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button  className="flex outline-none items-center gap-x-4 text-[15px] font-bold   text-[#a22a2b] border-none hover:border-none"> {/* onClick={changes} */}
              FR 
              <ChevronDownIcon
              style={{display:changeIcon1}}
                className='h-7 w-7  flex-none text-[#a22a2b] text-[15px] font-bold'
                aria-hidden="true"
              />
              <ChevronUpIcon
              style={{display:changeIcon}}
                className="h-7 w-7 font-bold flex-none text-[#a22a2b]"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white  top-full z-10 mt-3 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
                <div className=" gap-y-3">
                
              <div className="w-full pl-2 py-3 mt-1 hover:bg-[#ececec]" ><Link  href=""></Link>EN</div> 
                  
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          </Popover.Group>
             </div>

             <div className="flex py-1">
             <SocialIcon url="https://www.facebook.com/EquityBCDC/" fgColor='#a22a2b' bgColor='transparent' style={{ height: 34, width: 34 }} />
             <SocialIcon url="https://twitter.com/EquityBCDC" fgColor='#a22a2b' bgColor='transparent' style={{ height: 34, width: 34 }}  />
             <SocialIcon url="https://www.linkedin.com/company/equitybcdc/" fgColor='#a22a2b' bgColor='transparent' style={{ height: 34, width: 34 }} />
             <SocialIcon url="https://www.instagram.com/equitybankcongo/" fgColor='#a22a2b' bgColor='transparent' style={{ height: 34, width: 34 }} />
             </div>
            </div>
        </nav>
        </div>
    <header className=" h-15 border-b-2     ">      
  <nav
    className="mx-auto flex   items-center bg-[#fff] justify-between p-1 lg:px-[150px]"
    aria-label="Global"
  >
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-11 " aria-hidden="true" />
      </button>
      <div className="flex lg:flex">
      <Link href="/" className="-m-1.1 p-1">
        
        {/* <h3 className="h-9 w-auto pr-25 md:pr-80 lg:pr-0 font-bold text-black text-lg mt-2  md:top-0"> EQUITY-BCDC</h3> */}
        <img onClick={bodyproute}
          className="w-20 md:w-40 lg:w-40 h-auto"
          src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
          alt=""
        />
      </Link>
      </div>
    </div>
    
    <div className="hidden lg:flex bg-[#fff]">
      <Link href="/" className="-m-1.1 p-1">
        
        {/* <h3 className="h-9 w-auto pr-25 md:pr-80 lg:pr-0 font-bold text-black text-lg mt-2  md:top-0"> EQUITY-BCDC</h3> */}
        <img onClick={bodyproute}
          className="w-20 md:w-40 lg:w-40 h-auto"
          src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
          alt=""
        />
      </Link>
      </div>
      <div className="bg-[#fff] ">
      <Popover.Group className="hidden  lg:flex lg:gap-x-3 bg-[#fff] ">
      <Link href="/" className={`font-medium text-[15px] leading-6 text-black border-b-[2px] border-b-white hover:text-[#a22a2b] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
      Accueil
      </Link>          
      <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-[#fff]">
      <Popover className="relative">
        <Popover.Button onClick={changearrowabout} className={`font-medium text-[15px] flex outline-none leading-6 text-black border-b-[2px] border-b-white hover:text-[#a22a2b] hover:border-b-[#a22a2b]  ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
        Nos produits Diaspora 
          <ChevronDownIcon
          // style={{display:changeIcon5}}
            className='h-7 w-7  flex-none  text-[15px] font-bold'
            aria-hidden="true"
          />
          {/* <ChevronUpIcon
          style={{display:changeIcon4}}
            className="h-7 w-7 font-bold flex-none "
            aria-hidden="true"
          /> */}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute bg-white  top-full z-10 mt-3 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
               <Link href="/web1/credit">
                  <div  className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">

                  <p className={` text-[15px] leading-6   hover:text-[#ffffff] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
                    Comptes</p> 
                 
                  </div> </Link>
                  <Link href="/web1/cartebancaire">
                  <div  className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">

                  <p className={` text-[15px] leading-6   hover:text-[#ffffff] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
                  Cartes Bancaires</p> 
                 
                  </div> </Link>
                  <Link href="/web1/packdiaspora">
                  <div  className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">

                  <p className={`text-[15px] leading-6   hover:text-[#ffffff] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
                  Packs Diaspora</p> 
                 
                  </div> </Link>
                   
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className={`font-medium text-[15px] flex outline-none leading-6 text-black border-b-[2px] border-b-white  hover:text-[#a22a2b] hover:border-b-[#a22a2b]  ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
        Nos offres de Prêts
          <ChevronDownIcon
          // style={{display:changeIcon3}}
            className='h-7 w-7  flex-none  text-[15px] font-bold'
            aria-hidden="true"
          />
          {/* <ChevronUpIcon
          style={{display:changeIcon2}}
            className="h-7 w-7 font-bold flex-none "
            aria-hidden="true"
          /> */}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute bg-white  top-full z-10 mt-3 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
            <Link href="/web1/pretImmo"  >
                  <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
                  <Link href="/web1/pretImmo"  >
                  Prêt Immo Diaspora
                  </Link>
                  </div>     </Link>
                  <Link href="/web1/simulateur"  >
                  <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
                  <Link href="/web1/simulateur"  >
                  Simulateurs
                  </Link>
                  </div>     </Link>
                  
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
 
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className={`font-medium text-[15px] flex outline-none leading-6 text-black border-b-[2px] border-b-white  hover:text-[#a22a2b] hover:border-b-[#a22a2b]  ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
        Actualités
          <ChevronDownIcon
          // style={{display:changeIcon3}}
            className='h-7 w-7  flex-none  text-[15px] font-bold'
            aria-hidden="true"
          />
          {/* <ChevronUpIcon
          style={{display:changeIcon2}}
            className="h-7 w-7 font-bold flex-none "
            aria-hidden="true"
          /> */}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute bg-white  top-full z-10 mt-3 w-[200px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
                  <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
                  <Link href="/web1/nouveautes"  >
                  Nouveautés
                  </Link>
                  </div>
                  
                  <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
                  <Link href="/web1/communiquesdepresse"  >
                  Communiqués de presse
                  </Link>
                  </div>
                  
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={changearrowabout} className={`font-medium text-[15px] flex outline-none leading-6 text-black border-b-[2px] border-b-white  hover:text-[#a22a2b] hover:border-b-[#a22a2b]  ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`}>
        À propos
          <ChevronDownIcon
          // style={{display:changeIcon5}}
            className='h-7 w-7  flex-none  text-[15px] font-bold'
            aria-hidden="true"
          />
          {/* <ChevronUpIcon
          style={{display:changeIcon4}}
            className="h-7 w-7 font-bold flex-none "
            aria-hidden="true"
          /> */}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute bg-white  top-full z-10 mt-3 w-[240px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
              <Link href="/web1/diasporabanking">
                  <div onClick={aboutroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
                  <Link href="/web1/diasporabanking"  className={`text-[15px] leading-6   hover:text-[#ffffff] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`} >
                  À propos de nous
                  </Link>
                  </div></Link>
                    <Link href="/web1/portailclient">
              <div onClick={aboutroute2} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <Link href="/web1/portailclient" className={` text-[15px] leading-6   hover:text-[#ffffff] hover:border-b-[#a22a2b] ${loginOpen ? ' border-b-[#eaeaea] ' : ''}`} >
              
              Le portail Client
                  </Link>
              </div></Link>
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
      
  
      </Popover.Group>
      </div>
    


    <div className="  flex gap-x-3  lg:gap-x-6">
      <Link href="mailto:diaspora@equitybcdc.com">
      <EnvelopeIcon 
       className="h-6 w-6 justify-end text-[#a22a2b] "
       aria-hidden="true"
      />
      </Link>
     <Link className="hover:cursor-pointer" href="/web1/aide">
     <span className="flex justify-end" >
              <QuestionMarkCircleIcon className="h-6 w-6 text-[#a22a2b] "
       aria-hidden="true"/>
              <p className="text-[#a22a2b] font-medium text-[15px] hidden lg:flex">Beson d'Aide</p>
     </span>
     </Link>
     <Link href="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/">
     <span className="flex gap-x-2 justify-end">
      <p className="text-[#646464] lg:flex ">| </p>
      <UserCircleIcon className="h-6 w-6  text-[#a22a2b] "
       aria-hidden="true" />
       <p  className="text-[#a22a2b] hidden font-medium text-[15px] lg:flex"  >Mon compte</p>
     </span>
     </Link>
    </div>
  </nav>

  <Dialog
    as="div"
    className="lg:hidden"
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
  >
    <div className="fixed inset-0 z-10" />

    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto shadow-[2px_3px_5px_black] bg-[#fff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <Link href="#" className="-m-1.5 p-1.5 text-black">
        <img
          className="w-20 h-auto"
          src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
          alt=""
        />
        </Link>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-black"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6 ">
            <div className="flex gap-x-3">
            <div>
            <UserCircleIcon className="h-10 w-10 text-[#a22a2b] mt-4 " aria-hidden="true"/>
            </div>
          <div className="py-2 hover:cursor-pointer" onClick={() => setLoginOpen(true)}>
            <p className="text-black pt-4 font-medium text-[15px]">Mon compte</p>
            {/* <Link
              href="#"
              className="-mx-3 block rounded-lg px-3 py-0 text-base font-medium text-[15px] leading-7 text-[#a22a2b] "
            >
              Login / SignUp
            </Link> */}
          </div>
            </div>
            <Link
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-[#f2f2f2] hover:text-white"
            ><div className="flex gap-x-6 hover:text-white">
               {/* <WalletIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/> */}
               <p className="text-[#272828] font-medium text-[15px]">Accueil</p>
            </div>
           
            </Link>
        
            <Popover.Group className="flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className="flex gap-x-6 hover:text-white">
        {/* <BanknotesIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/> */}
        <p className="text-[#272828] font-medium text-[15px]">Nos produits Diaspora</p>
          <ChevronDownIcon
          // style={{display:changeIcon3}}
            className='h-7 w-7  flex-none text-[#272828] text-[15px] font-bold'
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute ml-10 bg-white  top-full z-10 mt-3 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
            <Link href="/web1/credit" >
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <Link href="/web1/credit" >
                    Comptes
                  </Link>
            </div>
            </Link>
            <Link href="/web1/cartebancaire" >
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <Link href="/web1/cartebancaire" >
                    Cartes Bancaires
                  </Link>
            </div>
            </Link>
            <Link href="/web1/packdiaspora" >
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <Link href="/web1/packdiaspora" >
                    Packs Diaspora
                  </Link>
            </div>
            </Link>
           
         
           
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>



      <Popover.Group className="flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className="flex gap-x-6 hover:text-white">
        {/* <BanknotesIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/> */}
        <p className="text-[#272828] font-medium text-[15px]">Nos offres de Prêts</p>
          <ChevronDownIcon
          // style={{display:changeIcon3}}
            className='h-7 w-7  flex-none text-[#272828] text-[15px] font-bold'
            aria-hidden="true"
          />
          {/* <ChevronUpIcon
          style={{display:changeIcon2}}
            className="h-7 w-7 font-bold flex-none  text-[#272828]"
            aria-hidden="true"
          /> */}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute ml-10 bg-white  top-full z-10 mt-3 w-[160px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
            <Link href="/web1/pretImmo"  >
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <Link href="/web1/pretImmo"  >
              Prêt Immo Diaspora
                  </Link>
            </div>
            </Link>
            <Link href="/web1/simulateur"  >
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
            <Link href="/web1/simulateur"  >
            Simulateur
                  </Link>
               
            </div>
            </Link>
          
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>

     

      <Popover.Group className="flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className="flex gap-x-6 hover:text-white">
        {/* <BanknotesIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/> */}
        <p className="text-[#272828] font-medium text-[15px]">
        Actualités</p>
          <ChevronDownIcon
          // style={{display:changeIcon3}}
            className='h-7 w-7  flex-none text-[#272828] text-[15px] font-bold'
            aria-hidden="true"
          />
          {/* <ChevronUpIcon
          style={{display:changeIcon2}}
            className="h-7 w-7 font-bold flex-none  text-[#272828]"
            aria-hidden="true"
          /> */}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute ml-10 bg-white  top-full z-10 mt-3 w-[200px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              <Link href="/web1/nouveautes"  >
              Nouveautés
                  </Link>
            </div>
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
            <Link href="/web1/communiquesdepresse" >
              
            Communiqués de presse
                  </Link>
            </div>
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
      <Popover.Group className="flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button onClick={change} className="flex gap-x-6 hover:text-white">
        {/* <BanknotesIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/> */}
        <p className="text-[#272828] font-medium text-[15px]">À propos</p>
          <ChevronDownIcon
          // style={{display:changeIcon3}}
            className='h-7 w-7  flex-none text-[#272828] text-[15px] font-bold'
            aria-hidden="true"
          />
          {/* <ChevronUpIcon
          style={{display:changeIcon2}}
            className="h-7 w-7 font-bold flex-none  text-[#272828]"
            aria-hidden="true"
          /> */}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute ml-10 bg-white  top-full z-10 mt-3 w-[250px]  overflow-hidden hover:cursor-pointer  shadow-lg text-[#646464] ">
            <div className=" gap-y-3">
            <Link href="/web1/diasporabanking"  >
            <div onClick={creditroute} className="w-fit pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
              
              À propos de nous
              
            </div>
            </Link>
            <Link href="/web1/portailclient" >
            <div onClick={creditroute} className="w-full pl-2 py-3 mt-1 text-black hover:text-white hover:bg-[#a22a2b] bg-white">
        
              
              Le portail Client
                 
            </div>
            </Link>
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>
      </Popover.Group>
      
          
          
  
          </div>

          
        
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>

  <Dialog
    as="div"
    className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
    open={loginOpen}
    onClose={setLoginOpen}
  >
    <div className="ml items-center max-w-screen-lg   " />

    <Dialog.Panel className="relative max-w-4xl lg:w-[1900px] p-6 bg-[#fff] rounded shadow-lg">
      <div className="flex items-center justify-between">
        <Link href="#" className="-m-1.5 p-1.5 text-black">
        <img
          className="w-20 h-auto"
          src="https://equitygroupholdings.com/cd/Content/assets/img/equity-bank-logo.png"
          alt=""
        />
        </Link>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-black"
          onClick={() => setLoginOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
        </button>
      </div>
      <div className="bg-[#a22a2b] md:fixed lg:fixed  md:ml-[370px] lg:ml-[370px] md:mt-[95px] lg:mt-[95px] items-center mx-auto p-4 w-[100px] rounded-full">
        <img src="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/assets/imgs/11.png" className="w-17 h-auto bg-[#a22a2b] mx-auto items-center" alt=""  />
          
        </div>
      <div className="block md:flex lg:flex mt-4  gap-x-1 lg:w-[300px]">
        <div className="mt-4 shadow-lg pl-2 border-gray-300 md:pt-8 lg:pt-8 pr-12 pb-5 border-t-[2px] border-t-[#f6f6f6]">
          <p className="text-black text-2xl">Se connecter</p>
          <div className="block mt-3 ">
          <div >
          <input type="text" placeholder="Adresse Email" className="text-[#1c1c1c] font-light border-[1px] px-3 py-2 w-full md:w-[360px] lg:w-[360px] mt-2  rounded-[7px]" />
          </div>
          <div>
          <input type="text" placeholder="Mot de passe" className="text-[#1c1c1c] font-light border-[1px] px-3 py-2 w-full  md:w-[360px] lg:w-[360px]  rounded-[7px] mt-2"  />
          </div>
          <button className='bg-[#a22a2b] hover:bg-[#d73611] mt-3 w-full  h-[40px] md:w-[190px] md:h-[40px]  rounded-3xl text-sm text-white font-extrabold'>Connectez-vous</button>
          <p className="text-black hover:text-[#a22a2b]  text-[16px] font-bold">Mot de passe oublié ?</p>
          </div>
        </div>
     
        <div className="mt-4 shadow-lg lg:w-[800px] border-gray-300 md:pl-[90px] md:pr-0 lg:pl-[90px] lg:pr-[50px] pb-5 pt-8 border-t-[2px] border-t-[#f6f6f6]">
          <p className="text-black text-2xl">Nouvel utilisateur ?</p>

          <Link href="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/register">
          <button className='bg-[#a22a2b]  hover:bg-[#d73611] mt-3 w-full px-3  h-[40px] md:w-[290px] md:h-[40px]  rounded-3xl text-sm text-white font-extrabold'>Inscrivez-vous</button>
          
          </Link>
          <p className="text-black hover:text-[#a22a2b]  text-[11px] font-bold">Guide du site</p>
          
        </div>
            
            
      </div>

      
    </Dialog.Panel>
  </Dialog>
</header>


 
 
  <div style={{display:shadow}} className="w-full h-[4000px] mt-[-2000px] bg-[#000] opacity-40 ">

  </div>

    </div>

)

}