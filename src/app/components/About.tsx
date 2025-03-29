import React from 'react'
import pic from "../component/img/diaspora.png"
import Image from 'next/image'
import {motion} from "framer-motion"
function About() {
  return (
    <div  className='text-center items-center justify-center flex mx-auto text-black'>
         <div  className='text-center items-center justify-center mx-auto'>
           <div className='block lg:flex gap-x-[80px] mt-[50px] w-full px-5'>
            <motion.div initial={{x: -200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='md:px-[100px] px-0 lg:px-0 items-center justify-center flex mx-auto'>
            <Image src={pic} className='text-white w-full h-auto   lg:h-[600px] shadow-xl rounded-[15px] lg:w-auto' alt=''/>
            </motion.div>
            <motion.div initial={{x: 200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='md:h-[600px] h-auto items-center justify-center mx-auto mt-10 md:px-[100px] px-0 lg:px-0'>
              <div className=''>
                <p className='md:text-[35px] text-[25px] font-medium text-center text-[#a22a2b]'>A PROPOS DE LA DIASPORA BANKING</p>
                <div className='text-[18px]  text-start w-full lg:w-[650px] mt-5 space-y-7'>
                <p className=''>Vous êtes congolais vivant à l’étranger ? profitez du service Diaspora Banking.
                Gérez vos comptes, épargnez, transférez de l’argent depuis l’étranger et profitez de notre large gamme de produits et services financiers.</p>

                <p>En effet, le service Diaspora Banking d'Equity BCDC s'adresse à tous les Congolais vivant à l'extérieur du pays pour plus de six mois, c'est à dire, pouvant justifier d'un domicile et d'une source de revenus à l'étranger. Ce service permet à notre clientèle de passer des ordres, d'effectuer des opérations et/ou de souscrire à nos différents produits bancaires, à distance.</p>

                <p> Si vous avez ouvert un compte local chez Equity BCDC et que vous savez que vous irez hors du pays pour une durée supérieure à six mois, vous pouvez basculer votre compte local en compte diaspora.</p>

                <a href="https://www.equitybcdc-diasporabanking.com/equity-bank-ui/">
                <p className='text-[#a22a2b] underline mt-4'>Souscrivez dès maintenant via le portail diaspora:</p></a>
                <p>Pour plus d'informations écrivez à l’adresse diaspora@equitybcdc.cd</p>
             
                </div>
            
              </div>
             
            </motion.div>
            
          </div>
    </div>
    </div>
  )
}

export default About