"use client"
import React,{useState} from 'react'

export default function Produits() {
const [show1, setShow1] = useState('none');
const [show2, setShow2] = useState('none');
const [show3, setShow3] = useState('none');
const [butt1, setButt1] = useState('Voir +');
const [butt2, setButt2] = useState('Voir +');
const [butt3, setButt3] = useState('Voir +');

function product1() {
    if(show1 == "none") {
        setShow1('')
        setButt1('Reduire')
    }
    else {
        setShow1('none')
        setButt1('Voir +')
    }
}
function product2() {
    if(show2 == "none") {
        setShow2('')
        setButt2('Reduire')
    }
    else {
        setShow2('none')
        setButt2('Voir +')
    }
}
function product3() {
    if(show3 == "none") {
        setShow3('')
        setButt3('Reduire')
    }
    else {
        setShow3('none')
        setButt3('Voir +')
    }
}
  return (
    <div className='block lg:flex text-[#323232] md:h-auto lg:h-[600px]  gap-x-3 mx-auto items-center justify-center space-y-10 lg:space-y-0 px-4 lg:px-[50px]'>
        <div className='shadow-xl  rounded-[15px] w-full lg:w-[380px]'>
            <div className=''>
            <p className='text-center  border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[25px]'>PACK EPARGNE DIASPORA</p>
            <p className='text-center text-[20px] py-2 border-b-[2px] text-[#636569] font-semibold'>Contient un compte epargne diaspora</p>
            <div className='text-[14px] font-normal text-start px-2 space-y-4 py-2 h-auto lg:h-[200px]' >
                <p>•	Dépôt initial minimum : 100 USD ou équivalent </p>
                <p>•	Toujour rémunéré au taux en vigueur au sein de Equity Bank Congo </p>
                <p>•	N’accepte que les cartes bancaires locales </p>
                <p>•	Un retrait gratuit par mois</p>
            </div>
            <div className='border-t-[2px] text-[14px] text-start space-y-3 px-2 h-auto lg:h-[240px]' style={{display:show1}}>
                <p className='py-3'>+ le service E-Banking (Frais d’utilisation : 20 USD+TVA par an)</p>
            </div>
            <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-[20px] font-semibold '>
                 <p className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-bl-[15px]' onClick={product1}>{butt1}</p>
                <p className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Souscrire</p>
            </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[15px] w-full lg:w-[380px]'>
            <div className=''>
            <p className='text-center  border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[25px]'>PACK CLASSIC DIASPORA</p>
            <p className='text-center text-[20px] py-2 border-b-[2px] text-[#636569] font-semibold'>Contient un compte courant diaspora</p>
            <div className='text-[14px] font-normal text-start px-2 space-y-4 py-2 h-auto lg:h-[200px]'>
                <p>•	Dépôt initial minimum : 100 USD ou équivalent </p>
                <p>•	Frais services digitaux : 1 USD/Euro + TVA ou équivalent en CDF par mois </p>
                <p>•	Pas de frais de transfert Internationaux entrants (hormis la RSC)</p>
         
            </div>
            <div className='border-t-[2px] text-[14px] text-start space-y-3 px-2 h-auto lg:h-[240px]' style={{display:show2}}>
                <p className='py-1'>+ Carte VISA CLASSIC</p>
                <div>
                    <p>•	Prix de la carte : 30 USD+TVA par an</p> 
                    <p>•	Limite retrait ATM : 2500 USD par jour </p> 
                    <p>•	Limite de paiement TPE et Internet : 4500 USD par jour</p>
                </div>
                <p>+ le service E-Banking (Frais d’utilisation : 20 USD+TVA par an)</p>
                <p>+ Compte épargne disponible sur demande</p>
            </div>
            <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-[20px] font-semibold '>
                 <p className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-bl-[15px]' onClick={product2}>{butt2}</p>
                <p className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Souscrire</p>
            </div>
            </div>
        </div>


        <div className='shadow-xl rounded-[15px] w-full lg:w-[380px]'>
            <div className=''>
            <p className='text-center  border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[25px]'>PACK GOLD DIASPORA</p>
            <p className='text-center text-[20px] py-2 border-b-[2px] text-[#636569] font-semibold'>Contient un compte courant diaspora</p>
            <div className='text-[14px] font-normal text-start px-2 space-y-4 py-2 h-auto lg:h-[200px]'>
                <p>•	Dépôt initial minimum : 100 USD ou équivalent </p>
                <p>•	Frais services digitaux : 1 USD/Euro + TVA ou équivalent en CDF par mois </p>
                <p>•	Pas de frais de transfert Internationaux entrants (hormis la RSC)</p>
            </div>
            <div className='border-t-[2px] text-[14px] text-start space-y-3 px-2 h-auto lg:h-[240px]' style={{display:show3}}>
                <p className='py-1'>+ Carte VISA GOLD</p>
                <div>
                    <p>•	Prix de la carte : 75 USD+TVA par an </p> 
                    <p>•	Limite retrait ATM : 5 000 USD par jour </p> 
                    <p>•	Limite de paiement TPE et Internet : 7 500 USD par jour</p>
                </div>
                <p>+ le service E-Banking (Frais d’utilisation : 20 USD+TVA par an)</p>
                <p>+ Compte épargne disponible sur demande</p>
            </div>
            <div className='border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-[20px] font-semibold '>
                 <p className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-bl-[15px]' onClick={product3}>{butt3}</p>
                <p className='py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]'>Souscrire</p>
            </div>
            </div>
        </div>
    </div>
  )
}
