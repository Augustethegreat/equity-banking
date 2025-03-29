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
    setAboutpage('none')
    setAboutpage2('none')
    setAboutcolor('black')
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
    setAboutpage2('none')
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
      setAboutpage2('none')
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
      setAboutpage2('none')
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



  <div style={{display:bodypage}}>
  <TheBody />
  </div>
  
  {/* <div style={{display:shadow}} className="w-full h-[4000px] mt-[-2000px] bg-[#000] opacity-40 ">

  </div> */}

    </div>

)

}