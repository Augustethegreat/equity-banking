import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Common country codes with country names
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
  
  interface PhoneInputProps {
    name: string;
    placeholder: string;
    required?: boolean;
    className?: string;
    onChange?: (value: { countryCode: string; phoneNumber: string }) => void;
  }
  
  export const PhoneInput = ({
    name,
    placeholder,
    required = false,
    className = "",
    onChange,
  }: PhoneInputProps) => {
    const [countryCode, setCountryCode] = useState("+243"); // Default to France
    const [phoneNumber, setPhoneNumber] = useState("");
  
    const handleCountryCodeChange = (value: string) => {
      setCountryCode(value);
      if (onChange) {
        onChange({ countryCode: value, phoneNumber });
      }
    };
  
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPhoneNumber(value);
      if (onChange) {
        onChange({ countryCode, phoneNumber: value });
      }
    };
  
    return (
      <div className="flex gap-2 ">
        <Select value={countryCode} onValueChange={handleCountryCodeChange} >
          <SelectTrigger className="w-[110px] border-[#a22a2b] hover:border-[#a22a2b] border-[2px] rounded-[5px] py-5">
            <SelectValue placeholder={countryCode} />
          </SelectTrigger>
          <SelectContent>
            {countryCodes.map((country) => (
              <SelectItem key={`${country.code}-${country.country}`} value={country.code}>
                <span>{country.code}</span> <span className="text-xs py-5 text-muted-foreground ml-1">{country.country}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="tel"
          name={name}
          placeholder={placeholder}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className={`w-full px-4 py-2 text-[#292929] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] ${className}`}
          required={required}
        />
      </div>
    );
  };
  
  export default PhoneInput;
  


  // SU20 Applicaiton Fom
  
  // Marketplace App
  // I'm currently working on deploying the app that we built and so far we able to code two features:
  // which are the business plan generator and the AI Business Agent which is meant to calculate credit score and give business advice. 

  // SMME ALUMNI DATABASE
  // We have already built the front and back end, but in order to calculate the impact we met with boitshoko so she can rephrase certain questions,
  // the issue was, we couldn't fetch and process certain data because of the way they phrase 

  // Programme Application Form 
  // We are now using our custom coded application form for every programmes, but because it's custom coded we will need more time to work on each application forms maybe 2 weeks to be safe.
  // but at least now we know that we won't have to rely on google form and microsoft form because of their limitations and restrictions we picked up .
  // now we have full control on our data privacy and security.
  
  // African FY25
  // Last week I didn't real have time to work on it but I did make some progress this week so hopefully I will send the draft of the website to Defense.

  // Podcast
  // We're left with one session for the assupol programme and I think as soon 