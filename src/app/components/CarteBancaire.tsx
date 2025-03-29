import Image from 'next/image'
import React from 'react'
import carteRed from './img/cartebank.png'
import card1 from "./img/Carte_prepaid.jpg"
import card2 from "./img/Carte_credit.jpg"
import card3 from "./img/Carte_classique.jpg"
import card4 from "./img/Carte_gold.jpg"
import card5 from "./img/Carte_Platinuim.jpg"
import card6 from "./img/Carte_infinite.jpg"
import carteBlack from './img/carte.png'
export default function CarteBancaire() {
  return (
    <div className='space-y-5'>
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard prépayée</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes prépayées</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <Image src={card1} alt='' />
                    {/* <p>- Prix : 10 USD +TVA</p>
                    <p>- Très flexible pour les transactions internet</p>
                    <p>- Frais de recharge 1% min 1.5$</p>
                    <p>- 1%+TVA en local et 1.2% à l’étranger limite 5000 USD </p>
                    <p>- Lier à un pool account</p>
                    <p>- Limite dépôt 5000 USD / jour</p>
                    <p>- Limite journalière retrait 2500 USD</p> */}
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard Crédit </p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes de crédit</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix de la carte : 50 USD + TVA</p>
                    <p>- Client cible : Client entrepreneur </p>
                    <p>- Frais de retrait : DAB/GAB EBCDC : 2,5 % du montant retiré +16% TVA, minimum 5 USD</p>
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard Débit Standard </p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes internationales</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix de la carte : 30 USD + TVA</p>
                    <p>- Limite journalière : retrait 2500 USD et Paiement/Achat en ligne : 3500 USD</p>
             
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>
        </div>

        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Classique </p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes internationales</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix de la carte : 30 USD + TVA</p>
                    <p>- Limite journalière : retrait 2500 USD et Paiement/Achat en ligne : 3500 USD</p>
                
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Gold</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges  </p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix: 75 USD +TVA</p>
                    <p>- Flexible pour les transactions en ligne</p>
                    <p>- Limite journalière très élevé 5000 USD retrait et 7500 USD achat</p>
                    <p>- Services offerts par Visa </p>
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Platinum</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix : 150 USD + TVA</p>
                    <p>- Cible: segment fortuné, revenus élevés, voyage fréquemment, dépenses modérées </p>
                    <p>- Limite journalière retrait 5000 USD et paiement 7500 USD </p>
                    <p>- Remplacement carte en cas de vol ou perte</p>
                    <p>- Dépannage en cash</p>
                    <p>- Assistance médical</p>
                    <p>- Assistance juridique</p>
                    
                   
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>
        </div>

        
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Infinite </p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges</p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Prix : 300 USD + TVA</p>
                    <p>- Limite journalière retrait 5000 USD et paiement 7500USD</p>
                    <p>- Limite journalière retrait 5000 USD et paiement 7500 USD </p>
                    <p>- Remplacement carte en cas de vol ou perte</p>
                    <p>- Dépannage en cash</p>
                    <p>- Accès aux lounges des aeroports</p>
                    <p>- Assistance médical</p>
                    
                    
                   
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard World Elite</p>
                <p className='text-[20px] font-semibold text-[#636569]'>Cartes Prestiges  </p> 
                <div className='text-start text-[14px] px-2 w-full lg:w-[350px] h-[180px]'>
                    <p>- Frais de commande : : 350 USD + TVA</p>
                    <p>- Prix annuel : 350 USD + TVA</p>
                    <p>- Période de validité : 5 ans</p>
                    <p>- Limite journalière retrait 9 900 USD et paiement 15 000 USD</p>
                    <p>- Services de dépannage en espèces,</p>
                    <p>- Service de conciergerie à l'aéroport</p>
                    <p>- Dépôt via les distributeurs automatiques et EquityBCDC Express </p>
                   
                </div>
                <div className='px-0 pt-3'>
                    <button className='font-semibold bg-[#a22a2b] text-white border-[2px] 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Voir</button>
                    </div>
            </div>
        </div>

        
        </div>
    </div>
  )
}
