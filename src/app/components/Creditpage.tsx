"use client";
import React from 'react'
import pic1 from "./img/Credit Immo1cc.jpg"
import pic2 from './img/pretimo.png'
import pic3 from './img/pretim.png'
import Image from 'next/image'
import {motion} from "framer-motion"
function Creditpage() {
  return (
    <div className='min-h-screen text-[#4d4d4d] overflow-hidden'>
       <div className=' items-center justify-center mx-auto flex mt-10 md:mt-0 px-5'>

            <div className='block lg:flex gap-x-[50px]'>
            <motion.div initial={{x: -200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='items-center px-0 lg:px-5 md:px-[50px]  justify-center mx-auto flex'>
            <Image src={pic1} className='text-white w-full h-auto lg:h-[550px] shadow-xl rounded-[15px] md:w-auto' alt=''/>
            </motion.div>
            <motion.div initial={{x: 200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='h-auto md:h-[750px] items-center justify-center px-0  lg:px-5 md:px-[50px] mx-auto flex'>
              <div className='px-0 md:px-5 lg:px-0 mt-4 md:mt-0'>
              <p className='text-[25px] px-2 md:px-0 md:text-start md:text-[32px] font-medium text-[#a22a2b] '>Qu’est-ce que le Prêt Immo Diaspora ?</p>
              <div className='text-start text-[18px] font-medium w-full lg:w-[650px] px-5 md:px-[50px] lg:px-3  mt-2 space-y-3'>
                <p>•	C’est une offre de crédit destinée aux congolais d’origine ou de nationalité vivants à l’étranger et ayant ou visant des intérêts économiques au pays dans le secteur immobilier.</p>
                <p> </p>
                <p>•	But du financement : Acquisition/ Construction/ Rénovation</p>
                <p>•	Maturité allant jusqu’à 5 ans</p>
              </div>

              <div className='mt-5'>
              <p className='text-[25px] px-2 md:px-0 md:text-start md:text-[32px] font-medium text-[#a22a2b]'>Qui est éligible ?</p>
              <div className='text-start text-[18px] font-medium w-full lg:w-[650px] px-5 md:px-[50px] lg:px-3  mt-2 space-y-3'>
                <p className=''>Tout client Diaspora Banking présentant</p>
                <p>•	Un projet immobilier documenté</p>
                <p>•	Un compte EBCDC actif depuis au moins 3 mois</p>
                <p>•	Une ou plusieurs sources de revenue stables et régulières</p>
                <p>•	Une garantie réelle et suffisante</p>
                <p>•	Une preuve de solvabilité : Credit report</p>
                <p>•	But du financement : Acquisition/ Construction/Rénovation</p>

              </div>
              </div>
              </div>
             
            </motion.div>
            
          </div>
          
       </div>


       <div className='items-center justify-center mx-auto flex px-5 md:px-0 '>
       <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='px-0 lg:px-[50px] shadow-xl rounded-[15px] '>
                <p className='text-[25px] md:text-[32px] text-center font-medium  mt-10 text-[#a22a2b]'>Préparation du dossier de demande</p>
                <div className='block lg:flex gap-x-[100px] mt-10 px-5'>
                  <div className='w-full lg:w-[500px] font-semibold text-[#4d4d4d]'>
                    <p className='text-center font-medium text-[20px] '>ACQUISITION</p>
                    <div className='px-[10px] lg:px-[70px] py-6 text-[18px] space-y-3 '>
                  <p>Trouver et négocier le bien à financer :</p>
                    <p>-	Compromis de vente</p>
                    <p>-	Titre de propriété à vérifier</p>
                    <p>-	Plan d’investissement</p>
                    </div>
                  </div>
                  <div className='font-medium text-[#4d4d4d]'>
                    
                    <p className='text-center font-semibold text-[20px] '>CONSTRUCTION /RENOVATION</p>
                    <div className='px-[10px] lg:px-[70px] py-6 text-[18px] space-y-3 '>
                    <p>-	Titre de propriété du bien à</p>
                    <p>-	Plan d’investissement</p>
                    <p>-	Titre de propriété de la garantie si différente</p>
                    <p>-	Procuration des éventuels co-propriétaires</p>
                    </div>
                 

                  </div>

                  <div>

                  </div>
                </div>
                </motion.div>
              </div>


              <div className='mt-[100px] px-5 md:px-0'>
                <div className='items-center justify-center mx-auto block lg:flex gap-x-10 px-0 lg:px-[100px]'>
                  
                <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='items-center justify-center mx-auto flex lg:hidden '>
                      <Image src={pic2} className='w-full md:w-[500px] lg:hidden md:block h-auto rounded-[15px] shadow-xl' alt='' />
                    </motion.div>
                <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='text-start items-center w-[500px] justify-center mx-auto flex'>
                      <div className='items-center justify-center mx-auto lg:px-0 px-0'>
                      <p className='text-[32px] text-[#a22a2b]'>Garanties</p>
                      <div className='space-y-7 font-medium text-[#4d4d4d]'>
                     <div>
                     <p className='text-[22px]'>- Garanties réelles</p>
                      <p>•	Le client soumet les garanties à l’appréciation de la banque</p>
                      <p>•	Bien concerné par le financement ou autres</p>
                      <p>•	Pas d’enfants mineurs sur les titres à inscrire</p>
                      <p>•	Procuration des co-propriétaires</p>
                     </div>

                      <div>
                      <p className='text-[22px]'>- Garanties personnelles</p>
                      <p>•	Une personne de référence localement (gérant, membre de famille, autres)</p>
                      </div>
                      </div>
                      </div>
                      </motion.div>

                    <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className=' items-center justify-center mx-auto flex'>
                      <Image src={pic2} className='w-[500px] h-auto lg:block hidden  rounded-[15px] shadow-xl' alt='' />
                    </motion.div>
                </div>
              </div>

              <div className='mt-[100px] pb-[100px] px-5 md:px-0'>
                <div className='items-center justify-center mx-auto flex '>

                <div className='block lg:flex gap-x-[70px]'>
                <motion.div initial={{y: 200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:true}}>
                      <Image src={pic3} className='w-[500px] h-auto rounded-[15px] shadow-xl' alt='' />
                      </motion.div>

                      <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='text-start'>
                      <p className='text-[25px] md:text-[32px]  text-[#a22a2b]'>Pourquoi choisir le Prêt Immo Diaspora?</p>
                      <div className='space-y-7 font-medium text-[#4d4d4d]'>
                     <div>
                
                      <p>•	Pas besoin de faire le déplacement</p>
                      <p>•	Evaluations et vérifications prises en charge par la banque</p>
                      <p>•	Prise en charge à distance via le portail [Souscrire ici]</p>
                      <p>•	L’apport de la banque jusqu’à 80% du coût total du projet</p>
                      <p>•	Traitement des dossiers rapide et efficace</p>
                      <p>•	Accompagnement de la banque pour les cas de désinsertion</p>
                     </div>

                      <div>
                      <p>- Garanties personnelles</p>
                      <p>•	Une personne de référence localement (gérant, membre de famille, autres)</p>
                      </div>
                      </div>
                      </motion.div>
                </div>
                   

                  
                </div>
              </div>
       </div>
  )
}

export default Creditpage