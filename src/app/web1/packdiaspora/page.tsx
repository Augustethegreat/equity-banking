"use client"
import React, { useState } from 'react';

export default function Packdiaspora() {
    const [show1, setShow1] = useState('none');
    const [show2, setShow2] = useState('none');
    const [show3, setShow3] = useState('none');
    const [butt1, setButt1] = useState('Voir +');
    const [butt2, setButt2] = useState('Voir +');
    const [butt3, setButt3] = useState('Voir +');

    function toggleProduct(show: string, setShow: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: string): void; }, buttonText: string, setButtonText: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: string): void; }) {
        if (show === "none") {
            setShow('');
            setButtonText('Réduire');
        } else {
            setShow('none');
            setButtonText('Voir +');
        }
    }

    return (
        <div className="block py-10 lg:flex text-[#323232] md:h-auto lg:h-[600px] bg-[#fff] gap-x-3 mx-auto items-center justify-center space-y-10 lg:space-y-0 px-4 lg:px-[50px]">
            {/* Pack Epargne Diaspora */}
            <div className="shadow-xl rounded-[15px] w-full lg:w-[420px]">
                <div>
                    <p className="text-center border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[25px]">PACK EPARGNE DIASPORA</p>
                    <p className="text-center text-base py-2 border-b-[2px] text-[#636569] font-semibold">Contient un compte epargne diaspora</p>
                    <div className="text-[14px] font-normal text-start px-2 space-y-4 py-2 h-auto ">
                        <p>• Dépôt initial minimum : 100 USD ou équivalent</p>
                        <p>• Toujours rémunéré au taux en vigueur au sein de Equity Banque Commerciale du Congo</p>
                        <p>• N’accepte que les cartes bancaires locales</p>
                    </div>
                    <div className=" text-[14px] text-start space-y-3 px-2 h-auto lg:h-[240px]" style={{ display: show1 }}>
                        <p>• Un retrait gratuit le mois au guichet</p>
                        <p>• Deux retraits gratuits le mois par ATM</p>
                    </div>
                    <div className="border-t-[2px] font-semibold text-[14px] text-start px-2 py-3 ">
                        <p>+ le service E-Banking (Frais d’utilisation : 5 USD+TVA par an)</p>
                    </div>
                    <div className="border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center">
                        <p className="py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-bl-[15px]" onClick={() => toggleProduct(show1, setShow1, butt1, setButt1)}>{butt1}</p>
                        <p className="py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]">Souscrire</p>
                    </div>
                </div>
            </div>

            {/* Pack Classic Diaspora */}
            <div className="shadow-xl rounded-[15px] w-full lg:w-[420px]">
                <div>
                    <p className="text-center border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[25px]">PACK CLASSIC DIASPORA</p>
                    <p className="text-center text-base py-2 border-b-[2px] text-[#636569] font-semibold">Contient un compte courant diaspora</p>
                    <div className="text-[14px] font-normal text-start px-2 space-y-4 py-2 h-auto ">
                        <p>• Dépôt initial minimum : 100 USD ou équivalent</p>
                        <p>• Frais de tenue de compte : 1 USD/Euro + TVA ou équivalent en CDF par mois</p>
                        <p>• Pas de frais de transfert Internationaux entrants (hormis la RSC)</p>
                    </div>
                    <div className="text-[14px] text-start space-y-3 px-2 h-auto lg:h-[240px]" style={{ display: show2 }}>
                        <p>• Carte VISA CLASSIC</p>
                        <p>• Prix de la carte : 30 USD+TVA par an</p>
                        <p>• Limite retrait ATM : 2500 USD par jour</p>
                        <p>• Limite de paiement TPE et Internet : 4500 USD par jour</p>
                        <p>• Compte épargne disponible sur demande</p>
                    </div>
                    <div className="border-t-[2px]  text-[14px] text-start px-2 py-3 font-semibold">
                        <p>+ le service E-Banking (Frais d’utilisation : 5 USD+TVA par an)</p>
                    </div>
                    <div className="border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center">
                        <p className="py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-bl-[15px]" onClick={() => toggleProduct(show2, setShow2, butt2, setButt2)}>{butt2}</p>
                        <p className="py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]">Souscrire</p>
                    </div>
                </div>
            </div>

            {/* Pack Gold Diaspora */}
            <div className="shadow-xl rounded-[15px] w-full lg:w-[420px]">
                <div>
                    <p className="text-center border-[#a22a2b] rounded-t-[15px] bg-[#a22a2b] py-3 font-medium text-white text-[25px]">PACK GOLD DIASPORA</p>
                    <p className="text-center text-base py-2 border-b-[2px] text-[#636569] font-semibold">Contient un compte courant diaspora</p>
                    <div className="text-[14px] font-normal text-start px-2 space-y-4 py-2 h-auto ">
                        <p>• Dépôt initial minimum : 100 USD ou équivalent</p>
                        <p>•  Frais de tenue de compte : 1 USD/Euro + TVA ou équivalent en CDF par mois</p>
                        <p>• Pas de frais de transfert Internationaux entrants (hormis la RSC)</p>
                    </div>
                    <div className=" text-[14px] text-start space-y-3 px-2 h-auto lg:h-[240px]" style={{ display: show3 }}>
                        <p>+ Carte VISA GOLD</p>
                        <p>• Prix de la carte : 75 USD+TVA par an</p>
                        <p>• Limite retrait ATM : 5 000 USD par jour</p>
                        <p>• Limite de paiement TPE et Internet : 7 500 USD par jour</p>
                        <p>• Compte épargne disponible sur demande</p>
                    </div>
                    <div className="border-t-[2px] text-[14px] text-start px-2 py-3 font-semibold">
                        <p>+ le service E-Banking (Frais d’utilisation : 5 USD+TVA par an)</p>
                    </div>
                    <div className="border-t-[2px] flex items-center justify-evenly rounded-b-[15px] text-base font-semibold text-center">
                        <p className="py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-bl-[15px]" onClick={() => toggleProduct(show3, setShow3, butt3, setButt3)}>{butt3}</p>
                        <p className="py-3 hover:bg-[#a22a2b] hover:text-white hover:cursor-pointer w-full rounded-br-[15px]">Souscrire</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
