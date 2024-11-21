"use client";

import { useState, useTransition, useEffect, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
type Language = {
  code: string;
  label: string;
  flag: string;
};

const LanguageChangerDropDown = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    label: "English",
    flag: "/images/USA.webp",
  });

  const languages = useMemo(
    () => [
      { code: "ka", label: "ქართული", flag: "/images/GE.webp" },
      { code: "en", label: "English", flag: "/images/USA.webp" },
      { code: "ru", label: "Русский", flag: "/images/RU.webp" },
    ],
    []
  );

  useEffect(() => {
    setSelectedLanguage(
      languages.find((lang) => lang.code === params.locale) || selectedLanguage
    );
  }, [params.locale, selectedLanguage, languages]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    startTransition(() => {
      router.replace(pathname, { locale: language.code });
    });
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
          {isPending ? (
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          ) : (
            selectedLanguage.code
          )}
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
