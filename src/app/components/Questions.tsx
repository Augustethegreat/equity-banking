import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import React, {useState, Fragment} from 'react'
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";


export default function Questions() {
const [showq1, setShowq1] = useState("");
const[hideq1, setHideq1]= useState('none');
const[ans1, setAns1] = useState(false);
const [showq2, setShowq2] = useState("");
const[hideq2, setHideq2]= useState('none');
const[ans2, setAns2] = useState(false);
const [showq3, setShowq3] = useState("");
const[hideq3, setHideq3]= useState('none');
const[ans3, setAns3] = useState(false);
const [showq4, setShowq4] = useState("");
const[hideq4, setHideq4]= useState('none');
const[ans4, setAns4] = useState(false);
const [showq5, setShowq5] = useState("");
const[hideq5, setHideq5]= useState('none');
const[ans5, setAns5] = useState(false);
const [showq6, setShowq6] = useState("");
const[hideq6, setHideq6]= useState('none');
const[ans6, setAns6] = useState(false);
const [showq7, setShowq7] = useState("");
const[hideq7, setHideq7]= useState('none');
const[ans7, setAns7] = useState(false);





  return (
    <div className='text-black px-5 lg:px-[150px] mt-4 flex items-center justify-center mx-auto pb-[220px]'>
        <div className='space-y-5 shadow-xl p-6 rounded-[15px]'>
        <div className=''>
            <p className='font-semibold text-[20px] text-[#a22a2b]'>Nos comptes </p>
            <Popover.Group className="flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button  className="flex outline-none mt-3 lg:mt-0 items-center text-start gap-x-4 text-[15px] font-normal   text-[#000] border-none hover:border-none">
            - Puis-je ouvrir un compte chez Equity BCDC depuis l’étranger ?
              <ChevronDownIcon onClick={()=> {setShowq1('none') ; setHideq1('') }} style={{display:showq1}}
                className='h-7 w-7  flex-none text-[#000] text-[15px] font-bold'
                aria-hidden="true"
              />
              <ChevronUpIcon onClick={()=> {setShowq1('') ; setHideq1('none') }}style={{display:hideq1}}
          
                className="h-7 w-7 font-bold flex-none text-[#000]"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white p-5 top-full z-10 mt-0 w-fit  overflow-hidden hover:cursor-pointer  shadow-xl text-[#646464] ">
                <div className=" space-y-2 px-3">
                  <p className='font-semibold'>Oui bien sûr.</p>
                 <p> Pour cela, il suffit de télécharger les formulaires à votre disposition dans votre espace client ou de nous contacter à l’adresse électronique suivante : diaspora@equitybcdc.cd afin que nous vous les transmettions.
                  Ensuite, il faudra nous faire parvenir :</p>
                  <p>•	Votre RIB (Relevé d'Identité Bancaire) du pays de votre résidence, </p>
                  <p>•	Une copie de votre pièce d'identité en cours de validité (Carte de résidant et/ou passeport)</p>
                  <p>•	Une photo d'identité</p>
                  <p>•	Un justificatif de domicile</p>
                  <p>Ensuite un conseiller vous sera attribué et vous accompagnera pour toute autre demande.
                  </p>
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          </Popover.Group>

          <Popover.Group className="flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button  className="flex outline-none mt-3 lg:mt-0 items-center text-start gap-x-4 text-[15px] font-normal   text-[#000] border-none hover:border-none">
            - Combien de temps cela prend-t-il d’ouvrir un compte ?
              <ChevronDownIcon onClick={()=> {setShowq2('none') ; setHideq2('') }} style={{display:showq1}}
                className='h-7 w-7  flex-none text-[#000] text-[15px] font-bold'
                aria-hidden="true"
              />
              <ChevronUpIcon onClick={()=> {setShowq2('') ; setHideq2('none') }}style={{display:hideq1}}
          
                className="h-7 w-7 font-bold flex-none text-[#000]"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white p-5 top-full z-10 mt-0 w-fit  overflow-hidden hover:cursor-pointer  shadow-xl text-[#646464] ">
                <div className=" space-y-2 px-3">
                 <p> Généralement, quand vous avez fourni toutes les pièces justificatives demandées et que vous avez bien rempli et signé vos formulaires, cela prend 24h pour ouvrir le compte dès réception de vos éléments.</p>
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          </Popover.Group>
        </div>

        <div>
        <p className='font-semibold text-[20px] text-[#a22a2b]'>Nos cartes bancaires </p>
        <Popover.Group className="flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button  className="flex outline-none mt-3 lg:mt-0 items-center text-start gap-x-4 text-[15px] font-normal   text-[#000] border-none hover:border-none">
            - Puis-je obtenir une carte bancaire alors que je vis à l’étranger ?
              <ChevronDownIcon onClick={()=> {setShowq3('none') ; setHideq3('') }} style={{display:showq1}}
                className='h-7 w-7  flex-none text-[#000] text-[15px] font-bold'
                aria-hidden="true"
              />
              <ChevronUpIcon onClick={()=> {setShowq3('') ; setHideq3('none') }}style={{display:hideq1}}
          
                className="h-7 w-7 font-bold flex-none text-[#000]"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white p-5 top-full z-10 mt-0 w-fit  overflow-hidden hover:cursor-pointer  shadow-xl text-[#646464] ">
                <div className=" space-y-2 px-3">
                  <p className='font-semibold'>Bien sûr !</p>
                 <p> Lorsque vous avez souscrit aux différents produits bancaires proposés par le service Diaspora Banking, nous pouvons vous les faire parvenir à l’international via notre partenaire transporteur. (Tarifs disponibles sur demande).</p>
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          </Popover.Group>
        </div>


        <div>
        <p className='font-semibold text-[20px] text-[#a22a2b]'>Nos procédures</p>
        <Popover.Group className="flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button  className="flex outline-none mt-3 lg:mt-0 items-center text-start gap-x-4 text-[15px] font-normal   text-[#000] border-none hover:border-none">
            - Pourquoi à chaque opération, on me demande de signer comme à l’ouverture du compte ?
              <ChevronDownIcon onClick={()=> {setShowq4('none') ; setHideq4('') }} style={{display:showq4}}
                className='h-7 w-7  flex-none text-[#000] text-[15px] font-bold'
                aria-hidden="true"
              />
              <ChevronUpIcon onClick={()=> {setShowq4('') ; setHideq4('none') }}style={{display:hideq4}}
          
                className="h-7 w-7 font-bold flex-none text-[#000]"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white p-5 top-full z-10 mt-0 w-fit  overflow-hidden hover:cursor-pointer  shadow-xl text-[#646464] ">
                <div className=" space-y-2 px-3">
                  <p>Un client résidant à l’étranger est considéré comme client dont l’identité peut être usurpée plus facilement.</p>
                  <p>Afin de renforcer la sécurité de vos informations et les accès à vos comptes, nous enregistrons votre signature dans notre système.</p>
                  <p>Aussi pour chaque opération, il y a une vérification de la signature qui vient appuyer la vérification de votre identité.</p>
                  
                 </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          </Popover.Group>

          <Popover.Group className="flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button  className="flex outline-none mt-3 lg:mt-0 items-center text-start gap-x-4 text-[15px] font-normal   text-[#000] border-none hover:border-none">
            - Pourquoi ma requête ne peut pas être prise en charge par l’équipe Diaspora ?
              <ChevronDownIcon onClick={()=> {setShowq5('none') ; setHideq5('') }} style={{display:showq5}}
                className='h-7 w-7  flex-none text-[#000] text-[15px] font-bold'
                aria-hidden="true"
              />
              <ChevronUpIcon onClick={()=> {setShowq5('') ; setHideq5('none') }}style={{display:hideq5}}
          
                className="h-7 w-7 font-bold flex-none text-[#000]"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white p-5 top-full z-10 mt-0 w-fit  overflow-hidden hover:cursor-pointer  shadow-xl text-[#646464] ">
                <div className=" space-y-2 px-3">
                  <p>Il y a plusieurs éléments qui peuvent empêcher que nous prenions votre dossier en charge :</p>
                  <p>-	Si vous ne résidez pas à l’étranger pour plus de 6 mois</p>
                  <p>-	Si vous ne pouvez pas justifier d’une pièce d’identité, un passeport ou d’un titre de séjour en cours de validité</p>
                  <p>-	Si vous n’avez pas de justificatifs de domicile</p>
                  <p>Mais si vous êtes en mesure de fournir tous les éléments demandés alors nous serons dans la joie de traiter votre demande.</p>
                  
                 </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          </Popover.Group>
        </div>

        <div>
        <p className='font-semibold text-[20px] text-[#a22a2b]'>Méthodes de livraison </p>
        <Popover.Group className="flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button  className="flex outline-none mt-3 lg:mt-0 items-center text-start gap-x-4 text-[15px] font-normal   text-[#000] border-none hover:border-none">
            - Comment puis-je retirer ma nouvelle carte bancaire ?
              <ChevronDownIcon onClick={()=> {setShowq6('none') ; setHideq6('') }} style={{display:showq6}}
                className='h-7 w-7  flex-none text-[#000] text-[15px] font-bold'
                aria-hidden="true"
              />
              <ChevronUpIcon onClick={()=> {setShowq6('') ; setHideq6('none') }}style={{display:hideq6}}
          
                className="h-7 w-7 font-bold flex-none text-[#000]"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white p-5 top-full z-10 mt-0 w-fit  overflow-hidden hover:cursor-pointer  shadow-xl text-[#646464] ">
                <div className=" space-y-2 px-3">
                  <p>Il y existe deux méthodes principales de livraison de cartes bancaires :</p>
                  <p>-	Par procuration : méthode selon laquelle vous désignez et mandatez quelqu’un pour retirer votre carte sous réserve de vérification. </p>
                  <p>-	Par un service courrier moyennant un frais d’expédition. </p>
                  
                 </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          </Popover.Group>

          
        </div>
        </div>

      
    </div>
  )
}
