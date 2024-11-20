"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
type Language = {
  code: string;
  label: string;
  flag: string;
};

const LanguageChangerDropDown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "KA",
    label: "ქართული",
    flag: "/images/GE.webp",
  });

  const languages = [
    { code: "KA", label: "ქართული", flag: "/images/GE.webp" },
    { code: "EN", label: "English", flag: "/images/USA.webp" },
    { code: "RU", label: "Русский", flag: "/images/RU.webp" },
  ];

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <Image
            src={selectedLanguage.flag}
            alt={`${selectedLanguage.label} flag`}
            width={15}
            height={15}
          />
          {selectedLanguage.code}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
          >
            <div className="flex items-center gap-2">
              <Image
                src={language.flag}
                alt={`${language.label} flag`}
                width={15}
                height={15}
              />
              {language.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageChangerDropDown;
