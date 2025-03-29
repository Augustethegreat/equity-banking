import React, { use, useState } from 'react'
import { TbMapSearch } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrLinkPrevious,  GrLinkNext } from "react-icons/gr";
import {motion} from "framer-motion"


export default function Visuals() {
  const[color1, setColor1] = useState('[#a22a2b]');
  const[color2, setColor2] = useState('');
  const[color3, setColor3] = useState('');
  const[color4, setColor4] = useState('');
  const[color5, setColor5] = useState('');
  const[page1, setPage1] = useState('');
  const[page2, setPage2] = useState('none');
  const[page3, setPage3] = useState('none');
  const[page4, setPage4] = useState('none');
  const[page5, setPage5] = useState('none');
  const[page6, setPage6] = useState('none');


      function page1route() {
        setColor1('[#a22a2b]')
        setColor2('black')
        setColor3('black')
        setColor4('black')
        setColor5('black')
        setPage1('');
        setPage2('none')
        setPage3('none')
        setPage4('none')
        setPage5('none')
        setPage6('none')
      }
      function page2route() {
        setColor1('black')
        setColor2('[#a22a2b]')
        setColor3('black')
        setColor4('black')
        setColor5('black')
        setPage1('none');
        setPage2('')
        setPage3('none')
        setPage4('none')
        setPage5('none')
        setPage6('none')
      }
      function page3route() {
        setColor1('black')
        setColor2('black')
        setColor3('[#a22a2b]')
        setColor4('black')
        setColor5('black')
        setPage1('none');
        setPage2('none')
        setPage3('')
        setPage4('none')
        setPage5('none')
        setPage6('none')
      }
      function page4route() {
        setColor1('black')
        setColor2('black')
        setColor3('black')
        setColor4('[#a22a2b]')
        setColor5('black')
        setPage1('none');
        setPage2('none')
        setPage3('none')
        setPage4('')
        setPage5('none')
        setPage6('none')
      }
      function page5route() {
        setColor1('black')
        setColor2('black')
        setColor3('black')
        setColor4('black')
        setColor5('[#a22a2b]')
        setPage1('none');
        setPage2('none')
        setPage3('none')
        setPage4('none')
        setPage5('')
        setPage6('none')
      }
      function page6route() {
        setColor1('black')
        setColor2('black')
        setColor3('black')
        setColor4('black')
        setColor5('black')
        setPage1('none');
        setPage2('none')
        setPage3('none')
        setPage4('none')
        setPage5('none')
        setPage6('')
      }

  return (
    <div className='pb-[0px] overflow-hidden flex' >
      <div className='text-[#414141] text-[16px] font-semibold bg-[#fafafa] shadow-xl  py-[110px] pb-[550px] w-[400px] space-y-7'>
        <div className='px-[40px]'>
          <p className={`border-l-4 border-l-${color1} pl-5 text-${color1}`}>01. Votre projet</p>
        </div>
        <div className='px-[40px]'>
          <p className={`border-l-4 border-l-${color2} pl-5 text-${color2}`}>02. Détails de votre projet</p>
        </div>
        <div className='px-[40px]'>
          <p className={`border-l-4 border-l-${color3} pl-5 text-${color3}`}>03. Vos revenus</p>
        </div>
        <div className='px-[40px]'>
          <p className={`border-l-4 border-l-${color4} pl-5 text-${color4}`}>04. Vos crédits en cours</p>
        </div>
        <div className='px-[40px]'>
          <p className={`border-l-4 border-l-${color5} pl-5 text-${color5}`}>05. Votre apport</p>
        </div>
      </div>

      <div className='bg-[#fffdfd] w-full  shadow-xl'>
        <div className='mt-[40px]   pl-[28%]' style={{display:page1}}>
          <div>
          <p className='  text-[50px] text-black font-bold'>Votre project immobilier</p>
          <p className='  text-black'>Où en êtes-vous dans votre projet ?</p>
          </div>
          <div className='mt-10'>
            <div onClick={page2route} className='bg-white flex shadow-xl text-[#a22a2b] shadow-[#b0afaf]  rounded-[10px] w-[500px] hover:cursor-pointer hover:bg-[#a22a2b] hover:text-white'>
            <div className='pl-8 py-6'>
              <TbMapSearch className=' w-10 h-auto'/>
            </div>
              <div className='py-5 px-[35px]  '>
              <p className='text-[20px] font-semibold'>Vous cherchez un bien</p>
              <p className='text-[16px]'>Estimez votre capacite d'achat.</p>
              </div>
            </div>
            <div onClick={page2route} className='bg-white shadow-xl text-[#a22a2b] hover:text-white hover:bg-[#a22a2b]  flex shadow-[#b0afaf]  rounded-[10px] w-[500px] mt-8 hover:cursor-pointer'>
            <div className='pl-8 py-6 '>
              <FaMapLocationDot  className='w-10 h-auto'/>
            </div>
              <div className='py-5 px-[35px] '>
              <p className='text-[20px] font-semibold'>Vous avez trouve un bien</p>
              <p className='text-[16px]'>Obtenez un avis sur la faisabilite de votre projet.</p>
              </div>
            </div>
            <p className='mt-[150px] text-[50px] text-[#e5e5e5] font-bold'>Détails de votre projet</p>
          </div>
        </div>

        <motion.div initial={{x: +200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}}
        className='mt-[40px]   pl-[28%]' style={{display:page2}}>
          <div>
          <p className='  text-[50px] text-black font-bold'>Détails de votre projet</p>
          <p className='  text-black'>Dites-nous en plus, cela nous permettra de vous donner la réponse la plus adaptée.</p>
          </div>
          <div className='mt-10'>
            <div className='text-black flex gap-x-5'>
              <div className='space-y-6'>
                <div>
                <p>Vous cherchez</p>
                <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                <option  value="Seul(e)">Seul(e)</option>
                <option  value="A deux">A deux</option>
                <option  value="Plus de deux">Plus de deux</option>          
                </select>
                </div>
                <div>
                <p>Dans la ville de</p>
                <input  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-[11px] text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      
                
                </div>
                <div>
                <p>Prix d'achat</p>
                <input  maxLength={10} required
               className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      
                        
                </div>
              </div>
              <div className='space-y-6'>
                <div>
                <p>À acheter</p>
                <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                <option  value="Seul(e)">Votre résidence principale</option>
                <option  value="A deux">Une résidence secondaire</option>
                <option  value="Plus de deux">Un investissement locatif</option>          
                </select>
                </div>
                <div>
                <p>Il s’agit d'un(e)</p>
                <select id="dropdownTextbox" required className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                <option  value="Seul(e)">Logement ancien</option>
                <option  value="A deux">Logement neuf achevé</option>
                <option  value="Plus de deux">VEFA (vente sur plan)</option>          
                </select>
                </div>
                <div>
                <p>Quel est votre âge ?</p>
                <input maxLength={2} required className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      

                </div>
              </div>

            </div>
            <div className='mt-[80px] flex gap-x-[4%]' >
            <p className=' text-[40px] text-[#e5e5e5] font-bold'>Vos revenus</p>
                <div className='flex mt-2 gap-x-[4%]'>
                  <div onClick={page1route} className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
                  <GrLinkPrevious className='mt-[4px] text-[19px] font-semibold'/>
                    <p className='font-semibold '>Previous</p>
                  </div>
                  </div>
                  <div onClick={page3route} className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
  
                    <p className='font-semibold '>Next</p>
                    <GrLinkNext className='mt-[4px] text-[19px] font-semibold'/>
                  </div>
                  </div>
                </div>
              </div> 
          </div>
          </motion.div>


          <motion.div initial={{x: +200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='mt-[40px]   pl-[28%]' style={{display:page3}} >
          <div>
          <p className='  text-[50px] text-black font-bold'>Vos revenus</p>
          <p className='  text-black'>Indiquez la moyenne sur 12 mois de vos revenus mensuels avant impôts.</p>
          <p className='  text-black'>Si vous empruntez à deux, faites la somme de vos revenus.</p>
          </div>
          <div className='mt-10'>
          <div>
                <p className='text-[17px] text-black '>Vos revenus nets mensuels</p>
                <div className='flex gap-x-[1px]'>
                <input  maxLength={10} required placeholder='0'
               className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      
                  <p className='text-black py-3 font-extrabold'>USD</p>
                  </div>      
                </div>
          
                <div className='mt-[90px] flex gap-x-[4%]' >
                  <p className='mt-[150px] text-[50px] text-[#e5e5e5] font-bold'>Vos crédits en cours</p>
            <div className='flex mt-[160px] gap-x-[4%] '>
                  <div onClick={page2route} className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
                  <GrLinkPrevious className='mt-[4px] text-[19px] font-semibold'/>
                    <p className='font-semibold '>Previous</p>
                  </div>
                  </div>
                  <div onClick={page4route} className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
  
                    <p className='font-semibold '>Next</p>
                    <GrLinkNext className='mt-[4px] text-[19px] font-semibold'/>
                  </div>
                  </div>
                </div>
                </div>
          </div>
          </motion.div>


          <motion.div initial={{x: +200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='mt-[40px]   pl-[28%]' style={{display:page4}}>
          <div className='w-[500px]'>
          <p className='  text-[50px] text-black font-bold'>Vos crédits en cours</p>
          <p className='  text-black'>Indiquez uniquement les crédits que vous continuerez à rembourser en même temps que votre nouveau crédit immobilier. Si vous empruntez à deux, faites la somme de vos mensualités de crédits respectifs.</p>
          </div>
          <div className='mt-10'>
          <div>
                <p className='text-[17px] text-black '>Vos mensualités de crédits </p>
                <div className='flex gap-x-[1px]'>
                <input  maxLength={10} required placeholder='0'
               className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      
                  <p className='text-black py-3 font-extrabold'>USD</p>
                  </div>      
                </div>
          
                <div className='mt-[90px] flex gap-x-[4%]' >
                  <p className='mt-[150px] text-[50px] text-[#e5e5e5] font-bold'>Votre apport</p>
            <div className='flex mt-[160px] gap-x-[4%] '>
                  <div onClick={page3route} className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
                  <GrLinkPrevious className='mt-[4px] text-[19px] font-semibold'/>
                    <p className='font-semibold '>Previous</p>
                  </div>
                  </div>
                  <div onClick={page5route} className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
  
                    <p className='font-semibold '>Next</p>
                    <GrLinkNext className='mt-[4px] text-[19px] font-semibold'/>
                  </div>
                  </div>
                </div>
                </div>
          </div>
          </motion.div>

          <motion.div initial={{x: +200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='mt-[40px]   pl-[28%]' style={{display:page5}}>
          <div className='w-[600px]'>
          <p className='  text-[50px] text-black font-bold'>Votre apport</p>
          <p className='  text-black'>L’apport personnel peut être composé de vos économies, d’un placement, de la vente d’un bien ou encore d’une donation.</p>
          </div>
          <div className='mt-10'>
          <div>
                <p className='text-[17px] text-black '>Vous avez un apport de </p>
                <div className='flex gap-x-[1px]'>
                <input  maxLength={10} required placeholder='0'
               className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      
                  <p className='text-black py-3 font-extrabold'>USD</p>
                  </div>      
                </div>
          
                <div className='mt-[90px] flex gap-x-[4%]' >
                  <p className='mt-[150px] text-[50px] text-[#e5e5e5] font-bold'>Votre apport</p>
            <div className='flex mt-[160px] gap-x-[4%] '>
                  <div onClick={page4route} className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
                  <GrLinkPrevious className='mt-[4px] text-[19px] font-semibold'/>
                    <p className='font-semibold '>Previous</p>
                  </div>
                  </div>
                  <div  className='bg-[#a22a2b] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <a href="/">
                  <div className='px-7 py-3 flex gap-x-3 '>
  
                    <p className='font-semibold '>Finish</p>
                    <GrLinkNext className='mt-[4px] text-[19px] font-semibold'/>
                  </div>
                  </a>
                  </div>
                </div>
                </div>
          </div>
          </motion.div>
      </div>
    </div>
  )
}
