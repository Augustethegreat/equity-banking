import React, { useEffect, useState } from 'react'
import themobile1 from "./img/cap6.png"
import themobile from "./img/themobile.jpg"
import cap3 from "./img/cap3.png"
import themobile2 from "./img/head3.jpg"
import smallhead from "./img/smallhead.png"
import appsell from "./img/offre2.jpg"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from '@heroicons/react/20/solid'
import Produits from './Produits'
import CarteBancaire from './CarteBancaire'

function Packages() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginOpen1, setLoginOpen1] = useState(false);
  const [loginOpen2, setLoginOpen2] = useState(false);
  const[comptepage, setComptepage]= useState('')
  const[cartepage, setCartepage]= useState('none')
  const[produitpage, setProduitpage]= useState('none')
  const[comptecolor, setComptecolor]= useState('[#a22a2b]')
  const[cartecolor, setCartecolor]= useState('black')
  const[produitcolor, setProduitcolor]= useState('black')


  const [shadow, setShadow] = useState('none')
  useEffect(() => {
    function HideShadow() {
      if (loginOpen || loginOpen1 || loginOpen2) {
        setShadow('');
      } else {
        setShadow('none');
      }
    }

    HideShadow();
  }, [loginOpen, loginOpen1, loginOpen2],);
  function compteroute () {
    setComptepage('')
    setCartepage('none')
    setProduitpage('none')
    setComptecolor('[#a22a2b]')
    setCartecolor('black')
    setProduitcolor('black')
  }
  function carteroute () {
    setComptepage('none')
    setCartepage('')
    setProduitpage('none')
    setComptecolor('black')
    setCartecolor('[#a22a2b]')
    setProduitcolor('black')
  }
  function produitroute () {
    setComptepage('none')
    setCartepage('none')
    setProduitpage('')
    setComptecolor('black')
    setCartecolor('black')
    setProduitcolor('[#a22a2b]')
  }

 function courant() {
    
  }
  function epargne() {

  }
  function dat() {

  }

  return (
    <div className='pb-[90px] '>
      
        <div className='scroll-smooth flex border-b-[1px] border-[#dee3e9] w-full mx-auto items-center text-[13px] md:text-[17px] font-medium'>
            <div className='max-w-screen-lg flex mx-auto items-center  gap-x-5 scroll-smooth'>
            <a href="#OptionsComptes">
            <div onClick={compteroute} className={`h-full  text-${comptecolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 className=''>Options Comptes</h1>
            </div>
            </a>
            <a href="#CartesBancaires" onClick={carteroute}>
            <div className={`h-full  text-${cartecolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >Cartes Bancaires</h1>
            </div>
            </a>
           <a href="#ProduitsDigitaux" onClick={produitroute}>
           <div className={`h-full text-${produitcolor} border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4`}>
                <h1 >Produits Digitaux</h1>
            </div>
           </a>
            </div>
        </div>

       <div className='mt-10' style={{display:comptepage}} >
       <div className='mx-auto  items-center justify-center pt-[70px] md:px-6 mt-10 lg:max-w-screen-xl pb-[150px]'>
         <div className='block  px-4 md:px-0 md:flex lg:block mx-auto items-center md:gap-x-5'>
         <div className='block lg:flex  lg:gap-x-4 space-y-5 lg:space-y-0'>
         <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>Courant</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>Le compte courant Equity vous permet de disposer de votre argent quand et comme vous le voulez, 24h/24 et 7 jour / 7.</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%] lg:gap-x-[55%]'>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                  <p>Souscrire</p>
                </a>
                <a >
                <p className='hover:cursor-pointer'   onClick={() => setLoginOpen2(true)}>Voir +</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>Epargne</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>Nous offrons à notre clientèle personne physique majeure deux types de compte d’épargne pour la réalisation de leurs projets.</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%] lg:gap-x-[55%]'>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                  <p>Souscrire</p>
                </a>
                <a >
                <p className='hover:cursor-pointer' onClick={() => setLoginOpen(true)}>Voir +</p>
                </a>
                </div>
            </div>
           </div>
           <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'>DAT</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>Au travers le compte Equity DAT (Compte bloqué), nous offrons aux titulaires d’un compte courant ou d’épargne, la possibilité de réaliser des investissements rémunérateurs sous forme d’un compte bloqué pour des maturités définies sur la liste des tarifs bancaires</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%] lg:gap-x-[55%]'>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                  <p>Souscrire</p>
                </a>
                <a >
                <p className='hover:cursor-pointer' onClick={() => setLoginOpen1(true)}>Voir +</p>
                </a>
                </div>
            </div>
           </div>
           {/* <div className='border-[#ebebeb] border-[1px] w-full md:w-[400px] rounded-[20px] shadow-xl shadow-[#bcbcbc] '>
           <div className='text-black p-7'>
                <p className='font-semibold text-[22px] text-[#636569]'> Epargne +</p>
                <p className='lg:w-[325px] h-[120px] text-[14px] pt-2'>Compte permettant la constitution d'une épargne rémunérée sans obligation de durée...</p>

            </div>
            <div className='text-[#fff] font-bold w-full border-t-[1px] border-b-[1px] border-b-[#a22a2b] border-t-[#ebebeb] bg-[#a22a2b] ' 
            style={{borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px'}}>
                <div className='flex px-7 py-5 text-[19px] gap-x-[45%] lg:gap-x-[55%]'>
                <a href="">
                <p>Souscrire</p></a>
                <a href='https://www.equitybcdc-diasporabanking.com/equity-bank-ui/auth/login?returnUrl=%2Fhome'>
                <p className=''>Voir +</p>
                </a>
                </div>
            </div>
           </div> */}
         </div>
         </div>
 
        </div>
        <div className='lg:px-[245px] lg:w-full lg:mt-0 mt-10 '>
        <img src={cap3.src} className=' hidden  md:hidden lg:flex  lg:w-full  lg:h-auto mt-0 lg:rounded-xl'  alt=''  />
        </div>
          <div className='px-4 lg:px-0'>
          <img src={appsell.src} className=' w-full h-[350px]  md:flex lg:hidden shadow-xl rounded-[20px]  md:w-[600px] md:mx-auto md:items-center lg:w-0 mt-6 lg:rounded-2xl'  alt=''  />
        
          </div>
       </div>

       <Dialog
        as="div"
        className="fixed inset-0 flex items-center w-full px-5 lg:px-[450px] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
        open={loginOpen}
        onClose={setLoginOpen}
      >
        <div className="items-center " />

        <Dialog.Panel className="relative max-w-4xl lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
          <div className="flex items-center justify-between outline-none">
         
          
          </div>
          <div className=''>
            <p className='text-center text-[30px] rounded-t-[15px] bg-[#a22a2b] w-full py-3 text-white'>EPARGNE</p>
            </div>
          <div className='p-[25px]   text-black space-y-5'>
            
            <div>
              <p className='text-[20px] font-medium'>COMPTE EPARGNE</p>
              <p>Nous offrons à notre clientèle personne physique majeure deux types de compte d’épargne pour la réalisation de leurs projets.</p>
            </div>

          <div className='border-t-[1px] border-b-[1px] border-[#575656] py-2'>
            <p className='text-[20px] font-medium  '>LISTE DE BENEFICES</p>         
            
            <div >
            <p>•	Rémunéré au taux en vigueur au sein de Equity Bank Congo </p>
              <p>•	N’accepte que les cartes bancaires locales </p>
              <p>•	Un retrait gratuit par mois</p>
            </div>
            </div>
            <div className='rounded-[15px]'>
              <p className='text-[20px] font-medium'>TARIFICATIONS</p>
              <div>
                <p>•	Dépôt initial minimum : 100 USD ou équivalent </p>
              </div>
            </div>
          </div>
      
          
        </Dialog.Panel>
      </Dialog>

      <Dialog
        as="div"
        className="fixed inset-0 flex items-center w-full px-5 lg:px-[450px] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
        open={loginOpen1}
        onClose={setLoginOpen1}
      >
        <div className="items-center " />

        <Dialog.Panel className="relative max-w-4xl lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
          <div className="flex items-center justify-between outline-none">
         
          
          </div>
          <div className=''>
            <p className='text-center text-[30px] rounded-t-[15px] bg-[#a22a2b] w-full py-3 text-white'>DAT</p>
            </div>
          <div className='p-[25px]   text-black space-y-5'>
            
            <div>
              <p className='text-[20px] font-medium'>COMPTE DAT</p>
              <p>Au travers le compte Equity DAT (Compte bloqué), nous offrons aux titulaires d’un compte courant ou d’épargne, la possibilité de réaliser des investissements rémunérateurs sous forme d’un compte bloqué pour des maturités définies sur la liste des tarifs bancaires</p>
            </div>

          <div className='border-t-[1px] border-b-[1px] border-[#575656] py-2'>
            <p className='text-[20px] font-medium  '>LISTE DE BENEFICES</p>         
            
            <div >
            <p>•	Taux d'intérêt compétitifs</p>
              <p>•	Possibilité de nantissement des dépôts </p>
              <p>•	Choix de la fréquence de paiement d’intérêts</p>
              <p>•	Avenant créditeur (Augmentation du montant du DAT)</p>
            </div>
            </div>
            <div className='rounded-[15px]'>
              <p className='text-[20px] font-medium'>TARIFICATIONS</p>
              <div>
                <p>•	Sur demande</p>
              </div>
            </div>
          </div>
      
          
        </Dialog.Panel>
      </Dialog>

      <Dialog
        as="div"
        className="fixed inset-0 flex items-center w-full px-5 lg:px-[450px] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
        open={loginOpen2}
        onClose={setLoginOpen2}
      >
        <div className="items-center " />

        <Dialog.Panel className="relative max-w-4xl lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
          <div className="flex items-center justify-between outline-none">
         
          
          </div>
          <div className=''>
            <p className='text-center text-[30px] rounded-t-[15px] bg-[#a22a2b] w-full py-3 text-white'>COURANT</p>
            </div>
          <div className='p-[25px]   text-black space-y-5'>
            
            <div>
              <p className='text-[20px] font-medium'>COMPTE COURANT</p>
              <p>Le compte courant Equity vous permet de disposer de votre argent quand et comme vous le voulez, 24h/24 et 7 jour / 7.</p>
            </div>

          <div className='border-t-[1px] border-b-[1px] border-[#575656] py-2'>
            <p className='text-[20px] font-medium  '>LISTE DE BENEFICES</p>         
            
            <div >
            <p>•	Pas de frais de transfert Internationaux entrants (hormis la RSC)</p>
            </div>
            </div>
            <div className='rounded-[15px]'>
              <p className='text-[20px] font-medium'>TARIFICATIONS</p>
              <div>
                <p>•	Dépôt initial minimum : 100 USD ou équivalent </p>
                <p>•	Frais services digitaux : 1 USD/Euro + TVA ou équivalent en CDF par mois </p>
              </div>
            </div>
          </div>
      
          
        </Dialog.Panel>
      </Dialog>


      <div style={{display:shadow}} className='bg-[#000] z-30 opacity-50 w-full mt-[-2000px] h-[2100px] lg:mt-[-1828px]'>

</div>

       <div style={{display:cartepage}} className='text-center items-center justify-center mx-auto'>
          <div className='mt-[50px] pb-[100px]'>
          {/* <p className='text-[40px] text-[#959595] font-bold '>#Carte Bancaire</p> */}
          <CarteBancaire/>
          </div>
       </div>
       <div style={{display:produitpage}} className='text-center items-center justify-center mx-auto'>
          <div className='mt-[50px] md:mt-[10px] pb-[20px]'>
          {/* <p className='text-[40px] text-[#959595] font-bold '>#Produits digitaux</p> */}
          <Produits/>
          </div>
       </div>
    </div>
  )
}

export default Packages