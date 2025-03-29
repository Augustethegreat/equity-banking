"use client";
import React, { useState, useRef } from "react";
import appsell from "../img/aide.jpg";
import cap3 from "../img/cap3.png";
import { CheckIcon } from "@heroicons/react/20/solid";
import Questions from "@/app/components/Questions";

function Aide() {
  const formRef = useRef<HTMLFormElement>(null);

  // State for validation and popup messages
  const [popupMessage, setPopupMessage] = useState<string>("Parfait !");
  const [popupSubMessage, setPopupSubMessage] = useState<string>(
    "Votre message a été envoyé avec succès !"
  );
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      // Check for any empty fields
      const isEmptyField = Array.from(formData.entries()).some(
        ([_, value]) => !value
      );

      if (isEmptyField) {
        setPopupMessage("Pour continuer votre demande,");
        setPopupSubMessage("Veuillez remplir toutes les informations demandées.");
        setShowPopup(true);
        return;
      }

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbw4sEzoxv7xa7oQTGrU2PhZS8B98szO_vB5GWO5tgqlht2RwCx9fN_1zdju4i09oXCt_A/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          setPopupMessage("Parfait !");
          setPopupSubMessage("Votre message a été envoyé avec succès !");
          formRef.current.reset();
        } else {
          setPopupMessage("Erreur !");
          setPopupSubMessage(
            "Une erreur est survenue. Veuillez réessayer plus tard."
          );
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
    window.location.reload(); // Optional, refresh the page after closing popup
  };

  const handleSubmits = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Extract form data
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      Nom: formData.get("Nom"),
      PostNom: formData.get("PostNom"),
      Courriel: formData.get("Courriel"),
      Phone: formData.get("Phone"),
      Country: formData.get("Country"),
      Demande: formData.get("Demande"),
      Operation: formData.get("Operation"),
      Commentaire: formData.get("Commentaire"),
      DateLogged: new Date().toISOString(),
    };
  
    // Convert to XML
    const xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <CustomerFeedback>
        <Firstname>${data.Nom}</Firstname>
        <Lastname>${data.PostNom}</Lastname>
        <Email>${data.Courriel}</Email>
        <TelephoneNo>${data.Phone}</TelephoneNo>
        <CustomerCountry>${data.Country}</CustomerCountry>
        <FeedbackType>${data.Demande}</FeedbackType>
        <TypeOfService>${data.Operation}</TypeOfService>
        <Feeback>${data.Commentaire}</Feeback>
        <DateLogged>${data.DateLogged}</DateLogged>
    </CustomerFeedback>`;
  
    // Send to backend
    try {
      const response = await fetch("http://localhost:3000/save-xml", {
        method: "POST",
        headers: { "Content-Type": "application/xml" },
        body: xml,
      });
  
      if (response.ok) {
        alert("Données enregistrées avec succès !");
      } else {
        alert("Échec de l'enregistrement");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Cote d'Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Democratic Republic of Congo", code: "CD" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, North", code: "KP" },
    { name: "Korea, South", code: "KR" },
    { name: "Kosovo", code: "XK" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" },
    { name: "Taiwan", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Vatican City", code: "VA" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
];
  



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

            <form ref={formRef} onSubmit={(e) => {handleSubmit(e) , handleSubmits(e); }} className="w-full mt-4">
              {/* Name and Surname Inputs */}
              <div className="flex flex-col md:flex-row gap-x-4">
                <input
                  type="text"
                  name="Nom"
                  placeholder="Nom"
                  className="w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] mb-3 md:mb-0"
                  required
                />
                <input
                  type="text"
                  name="PostNom"
                  placeholder="Post-Nom"
                  className="w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px]"
                  required
                />
              </div>

              {/* Email and Contact Number Inputs */}
              <div className="flex flex-col md:flex-row gap-x-4 mt-2">
                <input
                  type="email"
                  name="Courriel"
                  placeholder="Courriel"
                  className="w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] mb-3 md:mb-0"
                  required
                />
                <input
                  type="number"
                  name="Phone"
                  placeholder="Numéro de contact"
                  className="w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px]"
                  required
                />
              </div>
              <div className="mt-2">
                <select name="Country" className="w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px]" required>
                  <option value="Democratic Republic of Congo"  hidden>Select your country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>{country.name}</option>
                  ))}
                </select>
              </div>

              {/* Type of Request Dropdown */}
              <div className="mt-2">
                <select
                  name="Demande"
                  className="w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px]"
                  required
                >
                  <option value="" disabled hidden>
                    Votre type de demande
                  </option>
                  <option value="Requête">Requête</option>
                  <option value="Compliment">Compliment</option>
                  <option value="Plainte">Plainte</option>
                </select>
              </div>

              {/* Type of Operation Dropdown */}
              <div className="mt-2">
                <select
                  name="Operation"
                  className="w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px]"
                  required
                >
                  <option value="" disabled hidden>
                    Votre type d’opération
                  </option>
                  <option value="Ouverture de compte">Ouverture de compte</option>
                  <option value="Commande Carte">Commande Carte</option>
                  <option value="Réactivation de Compte">
                    Réactivation de Compte
                  </option>
                  <option value="Demande de prêt">Demande de prêt</option>
                  <option value="Autres">Autres</option>
                </select>
              </div>

              {/* Comment Textarea */}
              <div className="mt-3">
                <textarea
                  name="Commentaire"
                  placeholder="Commentaire"
                  className="w-full px-4 py-2 h-[100px] text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px]"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#a22a2b] hover:bg-[#d73611] w-full mt-3 px-4 py-2 text-white font-semibold rounded-[5px] shadow-lg shadow-[#7c7a7a]"
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
      </div>

      {/* FAQ Section */}
      <Questions />
    </div>
  );
}

export default Aide;
