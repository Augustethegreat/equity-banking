import React, { useState } from 'react'
import cap3 from "./img/cap3.png"
import img1 from "./img/acc3.jpg"
export default function Depot() {
  const[montplace, setMontplace]= useState(0);
  const[finalmont, setFinalMont]= useState(0);
  const[montplaces, setMontplaces]= useState('$0');
  const[finalmonts, setFinalMonts]= useState('$0');
  const [devise, setDevise]=useState('USD');
  const[times, setTimes] = useState('1 mois');
  const[period, setPeriod] = useState('Mensuellement');
  const[interest, setInterets] = useState(0);

  function defaultdigit(){
    if(montplace == null) {
  
      setMontplaces('$0');
      setFinalMonts('$0')
    }
    else if (montplace == 0) {
      
      setMontplaces('$0');
      setFinalMonts('$0')
    }
  }

  function caclulate() {
  let intnum = 0;
  let intnums=0;
  let final =0;
  defaultdigit();
  if (period == "Annuellement") {
    
    intnum = (montplace * 0.05);
    
    setInterets(intnums);
    setFinalMont(intnums + montplace);
    var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
    
  }
    else if   (period== "Mensuellement") {
        
      intnum = (montplace * 0.05)/12;
      
      setInterets(intnums);
      setFinalMont(intnums + montplace);
      var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
    }
   else if (period == "A l'echeance") {
      if(times == '3 mois') {
        
        intnum = (montplace * 0.05)/(12/3);
        
        setInterets(intnums);
        setFinalMont(intnums + montplace);
        var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
      }
      else if(times == '6 mois') {
        
        intnum = (montplace * 0.05)/(12/6);
        
        setInterets(intnums);
        setFinalMont(intnums + montplace);
        var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
      }
      else if(times == '9 mois') {
        
        intnum = (montplace * 0.05)/(12/9);
        
        setInterets(intnums);
        setFinalMont(intnums + montplace);
        var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
      }
      else if(times == '12 mois') {
        
        intnum = (montplace * 0.05);
        
        setInterets(intnums);
        setFinalMont(intnums + montplace);
        var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
      }
      else if(times == '2 ans') {
        
        intnum = (montplace * 0.05)/(12/24);
        
        setInterets(intnums);
        setFinalMont(intnums + montplace);
        var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
      }
      else if(times == '1 mois') {
        
        intnum = (montplace * 0.05)/(12);
        
        setInterets(intnums);
        setFinalMont(intnums + montplace);
        var formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum);
        var formattedAmounts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(intnum+montplace);
        setMontplaces(formattedAmount);
        setFinalMonts(formattedAmounts)
        
      }
    
   }
  }

  return (
    <div  className='pb-[100px]'>
         <div className='border-b-[0px] border-b-[#e2e5e9] lg:max-w-screen-lg mx-auto md:w-full lg:w-auto items-center'>
            <h1 className='text-[#a22a2b] font-bold text-center mt-5 mx-auto items-center text-[17px] lg:text-[25px] pb-3 w-full lg:w-[700px] px-3 border-b-[3px] border-b-[#a22a2b]'>Simulez votre dépôt à terme ou votre dépôt à taux fixe</h1>
        </div>
        <div className='mx-0 items-center justify-center mt-[30px] px-4 md:px-[224px]'>
            <div className=' block md:flex gap-x-10 shadow-xl rounded-[20px] pt-[60px]'>
              <div className='space-y-5  text-black text-[15px] md:text-[17px] pl-5 font-normal'>
                <div className=''>
                  <p>Montant à placer </p>
                  <div className='flex gap-x-[40px] md:gap-x-[165px]'>                  
                  <input type="number" value={montplace}
                   onChange={(event) => {
                    const inputval1 = event.target.value;
                    const num1 = parseFloat(inputval1)
                    setMontplace(num1);
                    caclulate();
                 } }placeholder='25000' className='outline-none w-[150px] md:w-auto border-b-[1px] border-b-[#cdcdcd] text-[#707070] font-medium'/>
                  <div className='flex gap-x-2'>
                    <p>Dévise</p>
                  <select id="dropdownTextbox" 
                   onChange={(event) => {
                    const inputval1 = event.target.value;
                    const num1 = inputval1
                    setDevise(num1);
                 } } className='w-full px-1 mt-0 md:w-[80px] outline-none pl-0 pb-1 text-[#707070] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option  value="USD">USD</option>
                  <option  value="CFC">CFC</option>
                  <option  value="EUR">EUR</option>
                  <option  value="RANDS">RANDS</option>                
                  </select>
                  </div>
                  </div>
                </div>
                <div className='block md:flex gap-x-[86px]'>
                  <p>Combien de temps souhaitez-vous épargner?</p>
                  <select id="dropdownTextbox"  
                   onChange={(event) => {
                    const inputval1 = event.target.value;
                    const num1 = inputval1
                    setTimes(num1);
                 } } onClick={caclulate}  className='w-[95%] px-1 mt-0 md:w-[80px] outline-none pl-0 pb-1 text-[#707070] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option onClick={caclulate}  value="1 mois">1 mois</option>
                  <option onClick={caclulate}  value="3 mois">3 mois</option>
                  <option onClick={caclulate}  value="6 mois">6 mois</option>
                  <option onClick={caclulate}  value="9 mois">9 mois</option>
                  <option onClick={caclulate}  value="12 mois">12 mois</option>
                  <option onClick={caclulate}  value="2 ans">2 ans</option> 
                 
                  </select>
                </div>
                <div className='flex gap-x-[120px]'>
                  <p>Taux d'intérêt annuel</p>
                  <p className='text-[#707070] font-medium'>5%</p>
                </div>
                <div className='block md:flex gap-x-10'>
                  <p>Quand voulez- vous recevoir votre intérêt?</p>
                  <select id="dropdownTextbox" 
                   onChange={(event) => {
                    const inputval1 = event.target.value;
                    const num1 = inputval1
                    setPeriod(num1);
                 } }  onClick={caclulate} className='w-[95%] px-0 mt-0 md:w-[150px] outline-none pl-0 pb-1 text-[#707070] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option onClick={caclulate} value="Mensuellement">Mensuellement</option>
                  <option onClick={caclulate} value="Annuellement">Annuellement</option>
                  <option onClick={caclulate} value="A l'echeance">A l'echeance</option>              
                  </select>

                </div>
              </div>


              <div className='shadow-xl rounded-[20px] mt-5 lg:mt-[-65px] w-auto md:w-[550px]'>
              <p className='text-center text-[25px] text-[#707070] font-semibold'>EVOLUTION DU DÉPÔT</p>
              <div className='text-black text-[15px] md:text-[20px] p-5'>
                
                <div className='flex gap-x-[70px] md:gap-x-[150px] '>
                  <div className='  space-y-5'>
                    <p>Montant versé</p>
                    <p>Taux d'intérêt annuel</p>
                    <p>Versement de l'intérêt</p>
                  </div>
                  <div className='font-semibold text-[#707070] text-[19px] md:text-[23px]  space-y-[14px]'>
                    <p> ${montplace}</p>
                    <p>5 %</p>
                    <p>{montplaces} </p>
                  </div>
                </div>
                <div className='border-b-[3px] border-b-[#b8b8b8] w-full px-2 py-3'>

                </div>
                <div className='flex text-[15px] md:text-[20px] gap-x-[38%] md:gap-x-[230px] pt-3'>
                    <p>Capital Accru</p>
                    <p className=' font-semibold text-[#707070] text-[19px] md:text-[23px] '>{finalmonts}</p>
                </div>
              </div>
              </div>
            </div>
        </div>
        <div className='text-[#707070] px-4 md:px-[224px] mt-10 text-[18px] font-semibold '>
          <p >La présente simulation ainsi que les taux sont purement indicatifs, approximent la base de calcul et servent uniquement à titre d'information, les données y intégrées n'engageant en rien EBCDC. L'ouverture d'un Dépôt se fait exclusivement en agence EBCDC.</p>
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
  )
}
