import React, { useState } from 'react'
import Link from 'next/link'
import head2 from "./img/cap3.png"
import cap3 from "./img/cap3.png"
import img1 from "./img/acc3.jpg"

import Visuals from './visuals'
function Credit() {
    const [openSimul, setOpensimul] = useState('none');
    const [creditCal, setCreditCal] = useState('')
    const [montsol, setMontsol] = useState(0);
    const[apport, setApport] = useState(0);
    const[taux, setTaux] = useState(15)
    const[duree, setDuree] = useState(1)
    const [mens, setMens] = useState('$0')
    const [amort, setAmort] = useState('$0');
    const [amorts, setAmorts] = useState('$0');

    function calculate() {
  


        const result = Math.round((montsol*(1 + taux/100)/duree)*10)/10;
        const amortis = Math.round(((result/100)*taux)*duree*10)/10;
        let nums =0;
        let num1 =0;
        let num2 =0;
        let num3 =0;
        let num4 =0;
        var monthlyInterestRate = (taux/100) ;
        var montantdepret = (montsol * monthlyInterestRate) * duree ;
        nums = montsol+ (montantdepret*duree); 
        num1 = montantdepret + montsol;
        num2 = Math.round(montantdepret *10)/10;
        num3 = Math.round(nums*10)/10;
        num4 = num1 / duree / 12;




        var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(num4);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(num1);
        var formattedAmoun = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(montsol);
        setAmorts(formattedAmoun )
        console.log(formattedAmount)
        setAmort(formattedAmount)
       setMens(formattedAmounts);

    }

    function simulpage() {
        setOpensimul('')
        setCreditCal('none')
    }
    function creditpage() {
        setOpensimul('none')
        setCreditCal('')
    }

  return (
    <div >
        <div className='pb-8 ' style={{display:creditCal}}>
         <div className='border-b-[0px] border-b-[#e2e5e9] lg:max-w-screen-lg mx-auto md:w-full lg:w-auto items-center'>
            <h1 className='text-[#a22a2b] font-bold text-center mt-5 mx-auto text-[17px] lg:text-[25px] items-center pb-3 w-full lg:w-[700px] px-10 border-b-[3px] border-b-[#a22a2b]'>Simulateur de Remboursement de Crédit Immo</h1>
        </div>
       
        <div className='flex mt-[60px] text-black text-[14px] font-medium  lg:max-w-screen-lg mx-auto items-center'>
            <div className="w-full md:px-[60px] shadow-xl pb-8 rounded-[10px] px-4 block md:flex gap-x-[50px]">
              <div className='space-y-4 md:space-y-8 md:w-[430px] w-full'>
              <div className=' block md:flex gap-x-[30px] w-full px-4 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[290px]'>Montant sollicité</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p>USD</p>
                        <input type="number"    value={montsol}
                         onChange={(event) => {
                            const inputval1 = event.target.value;
                            const num1 = parseFloat(inputval1)
                            setMontsol(num1);
                         } } placeholder='' className='border-[2px] border-[#a22a2b]  outline-[#a22a2b] w-[86%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p className='text-white'>P/Mois</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full px-4 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[290px]'>Apport</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p>USD</p>
                        <input type="number" 
                        onChange={(event) => {
                            const inputval1 = event.target.value;
                            const num1 = parseFloat(inputval1)
                            setApport(num1);
                         } }
                        minLength={3} placeholder='' className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[86%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p className='text-white'>P/Mois</p>
                    </div>

                </div>
                <div className=' block md:flex gap-x-[30px] w-full px-4 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[290px]'>Taux d'intérêt</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p className='flex md:hidden text-white'>SD</p>
                        <p className='text-white'>U</p>
                        <p className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[86%] md:w-[183px] py-2 mt-[-9px] text-end rounded-[5px] pr-2 '>15 %</p>
                        <p className='text-white'>Mois</p>
                <p className='text-white'>p/</p>
                    </div>

                </div>


                <div className=' block md:flex gap-x-[30px] w-full px-4 md:w-auto'>
                <p className='ml-4 md:ml-0 w-auto md:w-[290px]  '>Durée de paiement</p>
                <div className='flex'>
                    <p className='text-white'>U</p>
                    <p  className='text-white md:hidden block '>SD</p>
                <select id="dropdownTextbox" className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[84%] md:w-[185px] py-2 mt-[0px] md:mt-[-9px]  rounded-[5px] pr-2' onChange={(event) => {
                            const inputval1 = event.target.value;
                            const num1 = parseFloat(inputval1)
                            setDuree(num1);
                         } }>
                <option className='' value="" selected disabled hidden> 1 an</option>
                <option value="1 ans" >1 an</option>
                <option value="2 ans" >2 ans</option>
                <option value="3 ans">3 ans</option>
                <option value="4 ans">4 ans</option>
                <option value="5 ans">5 ans</option>
                <option value="6 ans">6 ans</option>
                <option value="7 ans">7 ans</option>
                </select>
                <p className='text-white'>Mois</p>
                <p className='text-white'>p/</p>
                </div>
           
                </div>
                {/* <div className=' block md:flex gap-x-[30px] w-full px-4 md:w-auto'>
                    <p className='ml-4 md:ml-0 w-auto md:w-[290px]  '>Durée de paiement</p>
                    <div className='flex gap-x-[1px] mt-2 md:mt-0'>
                        <p className='flex md:hidden text-white'>SD</p>
                        <p className='text-white'>U</p>
                        <input type="number" value={duree}
                        onChange={(event) => {
                            const inputval1 = event.target.value;
                            const num1 = parseFloat(inputval1)
                            setDuree(num1);
                         } } placeholder='' className='border-[2px] border-[#a22a2b] outline-[#a22a2b] w-[86%] md:w-auto py-2 mt-[-9px] text-end rounded-[5px] pr-2 '/>
                        <p>Mois</p>
                        <p className='text-white'>p/</p>
                    </div>

                </div> */}
                <div className='md:px-0 '>
                <button onClick={calculate} className='border-[#a22a2b] border-[2px] md:hover:bg-[#a22a2b] hover:bg-[#d73611] md:bg-white bg-[#a22a2b] shadow-lg md:hover:text-white py-2 px-5 text-white md:text-black text-[14px] w-full rounded-[5px] font-semibold'>CALCULEZ</button>
                </div>
              </div>
              <div className=' md:w-[430px] w-fullm mt-10 md:mt-0'>
              <p className='text-center text-[25px] text-[#707070] font-semibold'>EVOLUTION DU CREDIT</p>
               <div className='px-8 mt-[8px] space-y-2'>
               <div>
                    <p>Montant sollicité </p>
                    <p className='text-[25px]'>{amorts}  </p>
                </div>
                <div>
                    <p>Montant d'échéance</p>
                    <p className='text-[25px]'>{amort} </p>
                </div>
                <div>
                    <p>Montant de prêt </p>
                    <p className='text-[25px]'>{mens}  </p>
                </div>

               </div>
               {/* <div className='mt-[15px]' onClick={simulpage}>
          
                <button className='border-[#a22a2b] border-[2px] md:hover:bg-[#a22a2b] hover:bg-[#d73611] md:bg-white bg-[#a22a2b] shadow-lg md:hover:text-white py-2 px-5 text-white md:text-black text-[14px] w-full rounded-[5px] font-semibold'>DEMANDER UNE PRE-EVALUATION</button>
        
               </div> */}
                <div className='mt-[15px]'>
          
          <button className='border-[#a22a2b] border-[2px] md:hover:bg-[#a22a2b] hover:bg-[#d73611] md:bg-white bg-[#a22a2b] shadow-lg md:hover:text-white py-2 px-5 text-white md:text-black text-[14px] w-full rounded-[5px] font-semibold'>DEMANDER UNE PRE-EVALUATION</button>
  
         </div>
              </div>
             </div>
             

        </div>
        <div className='text-[#707070] px-4 md:px-[224px] mt-10 text-[18px] font-semibold'>
        <p className=' '>* Le taux d'intérêt est fixé par défaut au taux préférentiel. Les institutions bancaires peuvent choisir de prêter aux particuliers à un taux supérieur ou inférieur à ce taux préférentiel.</p>
         
            </div>  
           <div className='max-w-screen-lg mx-auto items-center justify-center'>
           <div className='px-4 w-full ' >
            <img src={cap3.src} className=' rounded-[15px] hidden md:flex md:w-full md:h-[250px] lg:flex lg:w-[1105px] h-[100px] lg:h-auto mt-10 lg:rounded-2xl'  alt=''  />
          
            </div>
            <div className='lg:w-auto md:w-auto w-full px-4'>
          <img src={img1.src} className=' w-full h-[400px] px-0 flex md:hidden lg:hidden rounded-[30px] md:w-[600px] shadow-lg md:mx-auto md:items-center lg:w-0 mt-10 lg:rounded-2xl'  alt=''  />
        
          </div>
           </div>
    </div>
    <div style={{display:openSimul, overflow:'hidden', overflowY:'hidden'}}>
        <Visuals/>
    </div>
    </div>
  )
}

export default Credit