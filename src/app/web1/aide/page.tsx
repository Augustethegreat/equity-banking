"use client";
import React, { useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import appsell from "../img/aide.jpg";
import cap3 from "../img/cap3.png";
import Questions from "@/app/components/Questions";

// Country codes
const countryCodes = [
  { code: "+1", country: "United States/Canada" },
  { code: "+1", country: "United States" },
  { code: "+1", country: "Canada" },
  { code: "+7", country: "Russia/Kazakhstan" },
  { code: "+20", country: "Egypt" },
  { code: "+27", country: "South Africa" },
  { code: "+30", country: "Greece" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+36", country: "Hungary" },
  { code: "+39", country: "Italy" },
  { code: "+40", country: "Romania" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+44", country: "United Kingdom" },
  { code: "+45", country: "Denmark" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+48", country: "Poland" },
  { code: "+49", country: "Germany" },
  { code: "+51", country: "Peru" },
  { code: "+52", country: "Mexico" },
  { code: "+53", country: "Cuba" },
  { code: "+54", country: "Argentina" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+58", country: "Venezuela" },
  { code: "+60", country: "Malaysia" },
  { code: "+61", country: "Australia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+84", country: "Vietnam" },
  { code: "+86", country: "China" },
  { code: "+90", country: "Turkey" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+93", country: "Afghanistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+95", country: "Myanmar" },
  { code: "+98", country: "Iran" },
  { code: "+212", country: "Morocco" },
  { code: "+213", country: "Algeria" },
  { code: "+216", country: "Tunisia" },
  { code: "+218", country: "Libya" },
  { code: "+220", country: "Gambia" },
  { code: "+221", country: "Senegal" },
  { code: "+222", country: "Mauritania" },
  { code: "+223", country: "Mali" },
  { code: "+224", country: "Guinea" },
  { code: "+225", country: "Ivory Coast" },
  { code: "+226", country: "Burkina Faso" },
  { code: "+227", country: "Niger" },
  { code: "+228", country: "Togo" },
  { code: "+229", country: "Benin" },
  { code: "+230", country: "Mauritius" },
  { code: "+231", country: "Liberia" },
  { code: "+232", country: "Sierra Leone" },
  { code: "+233", country: "Ghana" },
  { code: "+234", country: "Nigeria" },
  { code: "+235", country: "Chad" },
  { code: "+236", country: "Central African Republic" },
  { code: "+237", country: "Cameroon" },
  { code: "+238", country: "Cape Verde" },
  { code: "+239", country: "São Tomé and Príncipe" },
  { code: "+240", country: "Equatorial Guinea" },
  { code: "+241", country: "Gabon" },
  { code: "+242", country: "Republic of the Congo" },
  { code: "+243", country: "DR Congo" },
  { code: "+244", country: "Angola" },
  { code: "+245", country: "Guinea-Bissau" },
  { code: "+246", country: "British Indian Ocean Territory" },
  { code: "+248", country: "Seychelles" },
  { code: "+249", country: "Sudan" },
  { code: "+250", country: "Rwanda" },
  { code: "+251", country: "Ethiopia" },
  { code: "+252", country: "Somalia" },
  { code: "+253", country: "Djibouti" },
  { code: "+254", country: "Kenya" },
  { code: "+255", country: "Tanzania" },
  { code: "+256", country: "Uganda" },
  { code: "+257", country: "Burundi" },
  { code: "+258", country: "Mozambique" },
  { code: "+260", country: "Zambia" },
  { code: "+261", country: "Madagascar" },
  { code: "+262", country: "Réunion" },
  { code: "+263", country: "Zimbabwe" },
  { code: "+264", country: "Namibia" },
  { code: "+265", country: "Malawi" },
  { code: "+266", country: "Lesotho" },
  { code: "+267", country: "Botswana" },
  { code: "+268", country: "Eswatini" },
  { code: "+269", country: "Comoros" },
  { code: "+351", country: "Portugal" },
  { code: "+352", country: "Luxembourg" },
  { code: "+353", country: "Ireland" },
  { code: "+354", country: "Iceland" },
  { code: "+355", country: "Albania" },
  { code: "+356", country: "Malta" },
  { code: "+357", country: "Cyprus" },
  { code: "+358", country: "Finland" },
  { code: "+359", country: "Bulgaria" },
  { code: "+370", country: "Lithuania" },
  { code: "+371", country: "Latvia" },
  { code: "+372", country: "Estonia" },
  { code: "+373", country: "Moldova" },
  { code: "+374", country: "Armenia" },
  { code: "+375", country: "Belarus" },
  { code: "+376", country: "Andorra" },
  { code: "+377", country: "Monaco" },
  { code: "+378", country: "San Marino" },
  { code: "+380", country: "Ukraine" },
  { code: "+381", country: "Serbia" },
  { code: "+382", country: "Montenegro" },
  { code: "+383", country: "Kosovo" },
  { code: "+385", country: "Croatia" },
  { code: "+386", country: "Slovenia" },
  { code: "+387", country: "Bosnia and Herzegovina" },
  { code: "+389", country: "North Macedonia" },
  { code: "+420", country: "Czech Republic" },
  { code: "+421", country: "Slovakia" },
  { code: "+423", country: "Liechtenstein" },
  { code: "+501", country: "Belize" },
  { code: "+502", country: "Guatemala" },
  { code: "+503", country: "El Salvador" },
  { code: "+504", country: "Honduras" },
  { code: "+505", country: "Nicaragua" },
  { code: "+506", country: "Costa Rica" },
  { code: "+507", country: "Panama" },
  { code: "+509", country: "Haiti" },
  { code: "+590", country: "Guadeloupe" },
  { code: "+591", country: "Bolivia" },
  { code: "+592", country: "Guyana" },
  { code: "+593", country: "Ecuador" },
  { code: "+595", country: "Paraguay" },
  { code: "+597", country: "Suriname" },
  { code: "+598", country: "Uruguay" },
  { code: "+599", country: "Curaçao" },
  { code: "+673", country: "Brunei" },
  { code: "+674", country: "Nauru" },
  { code: "+675", country: "Papua New Guinea" },
  { code: "+676", country: "Tonga" },
  { code: "+677", country: "Solomon Islands" },
  { code: "+678", country: "Vanuatu" },
  { code: "+679", country: "Fiji" },
  { code: "+680", country: "Palau" },
  { code: "+682", country: "Cook Islands" },
  { code: "+683", country: "Niue" },
  { code: "+685", country: "Samoa" },
  { code: "+686", country: "Kiribati" },
  { code: "+687", country: "New Caledonia" },
  { code: "+688", country: "Tuvalu" },
  { code: "+689", country: "French Polynesia" },
  { code: "+691", country: "Micronesia" },
  { code: "+692", country: "Marshall Islands" },
  { code: "+852", country: "Hong Kong" },
  { code: "+853", country: "Macau" },
  { code: "+855", country: "Cambodia" },
  { code: "+856", country: "Laos" },
  { code: "+880", country: "Bangladesh" },
  { code: "+886", country: "Taiwan" },
  { code: "+960", country: "Maldives" },
  { code: "+961", country: "Lebanon" },
  { code: "+962", country: "Jordan" },
  { code: "+963", country: "Syria" },
  { code: "+964", country: "Iraq" },
  { code: "+965", country: "Kuwait" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+967", country: "Yemen" },
  { code: "+968", country: "Oman" },
  { code: "+970", country: "Palestine" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+972", country: "Israel" },
  { code: "+973", country: "Bahrain" },
  { code: "+974", country: "Qatar" },
  { code: "+975", country: "Bhutan" },
  { code: "+976", country: "Mongolia" },
  { code: "+977", country: "Nepal" },
  { code: "+992", country: "Tajikistan" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+995", country: "Georgia" },
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+998", country: "Uzbekistan" },
];

function Aide() {
  const formRef = useRef<HTMLFormElement>(null);
  const [countryCode, setCountryCode] = useState("+243");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [popupMessage, setPopupMessage] = useState("Parfait !");
  const [popupSubMessage, setPopupSubMessage] = useState("Votre message a été envoyé avec succès !");
  const [showPopup, setShowPopup] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/\D/g, ""); // remove non-digits
    const codeDigits = countryCode.replace("+", "");

    // If user starts with codeDigits, remove it
    const input = rawInput.startsWith(codeDigits)
      ? rawInput.slice(codeDigits.length)
      : rawInput;

    setPhoneNumber(input);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      const selectedCountry = countryCodes.find((c) => c.code === countryCode)?.country || "Unknown";
  
      formData.append("Phone", fullPhoneNumber);
      formData.append("Country", selectedCountry); // ✅ Add country name to submission
  
      const isEmptyField = Array.from(formData.entries()).some(([_, value]) => !value);
  
      if (isEmptyField) {
        setPopupMessage("Pour continuer votre demande,");
        setPopupSubMessage("Veuillez remplir toutes les informations demandées.");
        setShowPopup(true);
        return;
      }
  
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxd04xiNJcl6sSOwwja1iQ5AroUGdtuf6ojr66DtameiwFjAziW9Qz1zpTAH7gvJ2LxyA/exec",
          {
            method: "POST",
            body: formData,
          }
        );
  
        if (response.ok) {
          setPopupMessage("Parfait !");
          setPopupSubMessage("Votre message a été envoyé avec succès !");
          formRef.current.reset();
          setPhoneNumber("");
          setCountryCode("+243");
        } else {
          setPopupMessage("Erreur !");
          setPopupSubMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
        }
      } catch (error) {
        setPopupMessage("Erreur réseau !");
        setPopupSubMessage("Veuillez vérifier votre connexion et réessayer.");
      }
  
      setShowPopup(true);
    }
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="scroll-smooth pb-[20px] bg-[#fff]">
    {/* Navbar Section */}
    <div className="scroll-smooth bg-[#fff] flex border-b-[1px] border-[#dee3e9] w-full mx-auto items-center text-[13px] md:text-[17px] font-medium">
      <div className="max-w-screen-lg flex mx-auto items-center gap-x-5">
        <a href="#sendus">
          <div className="h-full bg-[#fff] text-black border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4">
            <h1>Vos questions</h1>
          </div>
        </a>
        <a href="#contact">
          <div className="h-full text-black border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4">
            <h1>Contactez-nous</h1>
          </div>
        </a>
        <a href="#faqs">
          <div className="h-full text-black border-[#fff] hover:border-b-[#a22a2b] hover:text-[#a22a2b] border-[4px] py-4">
            <h1>FAQS</h1>
          </div>
        </a>
      </div>
    </div>

    {/* Main Form Section */}
    <div className="pb-[20px] bg-[#fff] mx-auto items-center lg:max-w-screen-lg font-body">
      <p id="sendus" className="text-black text-2xl font-medium text-center mt-2">
        Vous désirez de l’aide ?
      </p>

      <div className="flex justify-center items-center w-full">
        <div className="mx-auto px-4 lg:px-[250px]">
          <p className="text-xl mt-3 text-black font-medium">
            Avez-vous un souci ?
          </p>
          <p className="text-sm mt-2 text-black">
            Déposez-nous un mot dans ce formulaire de contact et nous vous
            reviendrons sous peu.
          </p>
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
        <label className="block mb-2 text-sm">Nom</label>
        <Input name="Nom" required />

        <label className="block mt-4 mb-2 text-sm">PostNom</label>
        <Input name="PostNom" required />

        <label className="block mt-4 mb-2 text-sm">Courriel</label>
        <Input name="Courriel" type="email" required />

        <label className="block mt-4 mb-2 text-sm">Téléphone</label>
        <div className="flex items-center gap-2">
          <Select value={countryCode} onValueChange={(value) => setCountryCode(value)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Code" />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map(({ code, country }) => (
                <SelectItem key={code} value={code}>
                  {country} ({code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="Numéro"
            value={`${countryCode}${phoneNumber}`}
            onChange={handlePhoneNumberChange}
            className="flex-1"
            required
          />
        </div>

        <label className="block mt-4 mb-2 text-sm">Demande</label>
        <Input name="Demande" required />

        <label className="block mt-4 mb-2 text-sm">Opération</label>
        <Input name="Operation" required />

        <label className="block mt-4 mb-2 text-sm">Commentaire</label>
        <Input name="Commentaire" />

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
      </div>
        </div>

       {/* Popup Modal */}
       {showPopup && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-[#a22a2b] text-white p-4 rounded-[20px] h-[25vh]">
              <p className="text-center text-xl">{popupMessage}</p>
              <p className="text-center text-xl">{popupSubMessage}</p>
              <button
                onClick={closePopup}
                className="text-lg bg-[#fff] text-black py-3 w-full mt-[3vh] rounded-[10px] px-6 font-bold justify-center flex"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
     {/* FAQ Section */}
     <Questions />
    </div>
    </div>
  );
}

export default Aide;
