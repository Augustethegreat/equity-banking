"use client";
import Link from "next/link";
import Footers from "./components/footer";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon,QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon,ChevronDownIcon,ChevronUpIcon,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { SocialIcon } from 'react-social-icons'
import { cn } from "./lib/utils";
import TheBody from "./components/Body";
import Header from "./components/Header";
import Aide from "./components/Aide";
import Packages from "./components/Packages";
import Credit from "./components/Credit";
import Depot from "./components/Depot";
import About from "./components/About";
import Creditpage from "./components/Creditpage";
import {motion} from "framer-motion"
import "./globals.css"
import Page1 from "./web1/page";
export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [changeIcon, setChangeIcon] = useState("none")
  const [changeIcon1, setChangeIcon1] = useState("block")
  const [changeIcon2, setChangeIcon2] = useState("none")
  const [changeIcon3, setChangeIcon3] = useState("block")

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

  const[lang, setLang] = useState('FR');
  const[lang1, setLang1] = useState('EN');
 const[showfr, Setshowfr] = useState('');
 const[showEN, SetshowEN] = useState('none');

  function langchange() {
    if (lang =='FR') {
      setLang('EN')
      setLang1('FR')
      Setshowfr('none')
      SetshowEN('')
    }
    else{
      setLang('FR')
      setLang1('EN')
      Setshowfr('')
      SetshowEN('none')
    }
  }
  
  function packroute() {
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setPackpage('')
    setPackcolor('[#a22a2b]')
    setMobileMenuOpen(false)
    setCreditcolor('black')
    setDepotpage('none')
    setVisualpage('none')
    setDepotcolor('black')
  }
  function depotroute() {
    setDepotpage('')
    setDepotcolor('[#a22a2b]')
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setVisualpage('none')
    setPackpage('none')
    setPackcolor('black')
    setMobileMenuOpen(false)
    setCreditcolor('black')
    setAboutpage('none')
    setAboutcolor('black')
  }
  function aboutroute() {
    setAboutpage('')
    setAboutcolor('[#a22a2b]')
    setDepotpage('none')
    setDepotcolor('black')
    setCreditpage('none')
    setHelppage('none')
    setBodypage('none')
    setPackpage('none')
    setVisualpage('none')
    setPackcolor('black')
    setMobileMenuOpen(false)
    setCreditcolor('black')
  }
  function helproute() {
    if(helpage =="none") {
      setHelppage(" ")
      setBodypage('none')
      setCreditpage('none')
      setPackpage('none')
      setPackcolor('black')
      setCreditcolor('black')
      setDepotpage('none')
      setVisualpage('none')
      setAboutpage('none')
      setAboutcolor('black')
      setDepotcolor('black')
    }
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
      setAboutcolor('black')
    }
  }
  function visualroute() {
    setMobileMenuOpen(false)
      setHelppage("none")
      setCreditpage('none')
      setBodypage('none')
      setPackpage('none')
      setPackcolor('black')
      setDepotpage('none')
      setVisualpage('')
      setDepotcolor('black')
      setAboutpage('none')
      setAboutcolor('black')
    
  }
  function changes() {
      if(changeIcon =="none") {
        setChangeIcon("block")
        setChangeIcon1("none")
      }
      else{
        setChangeIcon("none")
        setChangeIcon1("block")
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
  
  return (
    <main className={`min-h-screen filter   items-center justify-between bg-[#fff] `}>
            {/* <div className=" fixed w-[100%] h-[100%] overflow-hidden opacity-10 "></div> */}





        {/* <Header/> */}

      <div style={{display:showfr}}>
        <Page1 />
      </div>

 
  
    </main>
  );
}