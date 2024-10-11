"use client";

import Image from "next/image";
import vector from "../../public/images/vector.svg";
import dog from "../../public/images/dog.svg";
import cat from "../../public/images/cat.svg";
import parrot from "../../public/images/parrot.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimalType } from "@/types/types";
import { useRouter } from "next/router";

const Fillter = () => {
  // const router = useRouter();

  const [isOpen, setIsOpen] = useState<Record<AnimalType, boolean>>({
    dogs: false,
    cats: false,
    birds: false,
  });

  // const [activeOption, setActiveOption] = useState<
  //   Record<AnimalType, string | null>
  // >({
  //   dogs: null,
  //   cats: null,
  //   birds: null,
  // });

  const toggleOpen = (item: AnimalType) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  // const handleOptionClick = (animalType: AnimalType, option: string) => {
  //   setActiveOption((prevState) => ({
  //     ...prevState,
  //     [animalType]: option,
  //   }));
  //   // Update the URL based on the selected option
  //   router.push(`/${animalType}/${option.toLowerCase()}`);
  // };

  const options: Record<AnimalType, string[]> = {
    dogs: ["საკვები", "აქსესუარები", "სათამაშო", "მოვლის საშუალებები"],
    cats: ["საკვები", "აქსესუარები", "სათამაშო", "მოვლის საშუალებები"],
    birds: ["საკვები", "აქსესუარები", "სათამაშო", "მოვლის საშუალებები"],
  };
  return (
    <>
      <div className="tiny:hidden smaller:hidden hidden md:flex">
        <ul className="text-[#000000] text-base font-medium flex gap-5 md:flex-row md:w-full md:justify-between lg:flex lg:flex-col">
          {(["dogs", "cats", "birds"] as AnimalType[]).map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start md:gap-[86px] lg:gap-0 cursor-pointer"
              onClick={() => toggleOpen(item)}
            >
              <div className="flex items-center justify-between w-full">
                <span className="hover:text-[#EE5335]">
                  {item === "dogs"
                    ? "ძაღლები"
                    : item === "cats"
                    ? "კატები"
                    : "ჩიტები"}
                </span>
                <Image
                  src={vector}
                  alt="vector svg"
                  className="cursor-pointer"
                />
              </div>
              <AnimatePresence>
                {isOpen[item] && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-2 w-full"
                  >
                    {options[item].map((option, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 py-1 hover:text-gray-800"
                      >
                        {option}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>

      <div className="tiny:flex smaller:flex flex md:hidden">
        <div>
          <Image src={dog} alt="dog svg" className="cursor-pointer" />
        </div>
        <div>
          <Image src={cat} alt="cat svg" className="cursor-pointer" />
        </div>
        <div>
          <Image src={parrot} alt="parrot svg" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Fillter;
