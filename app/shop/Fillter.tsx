"use client";

import Image from "next/image";
import vector from "../../public/images/vector.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dog from "../../public/images/dog.svg";
import cat from "../../public/images/cat.svg";
import parrot from "../../public/images/parrot.svg";
import { Category } from "@/types/types";
import { useRouter } from "next/navigation";

const Fillter: React.FC<{ item: Category }> = ({ item }) => {
  const router = useRouter();
  const subCategory = item.subCategory;

  console.log(item);

  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleOpen = (category: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleFilterClick = (category: string) => {
    router.push(`/shop/${category}`);
  };

  return (
    <>
      <div className="tiny:hidden smaller:hidden hidden md:flex">
        <ul className="text-[#000000] text-base font-medium flex gap-5 md:flex-row md:w-full md:justify-between lg:flex lg:flex-col">
          {item && item.title ? (
            <li
              key={item._id}
              className="flex flex-col items-start md:gap-[86px] lg:gap-0 cursor-pointer"
              onClick={() => {
                toggleOpen(item.title);
                handleFilterClick(item.title);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <span className="hover:text-[#EE5335]">
                  {item.title === "Dogs"
                    ? "ძაღლები"
                    : item.title === "Cats"
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
                {isOpen[item.title] && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-2 w-full"
                  >
                    {subCategory ? (
                      subCategory.map(({ title, _id }) => (
                        <li
                          key={_id}
                          className="text-sm text-gray-600 py-1 hover:text-gray-800"
                          onClick={() => handleFilterClick(title)}
                        >
                          {title === "Toys"
                            ? "სათამაშო"
                            : title === "Accessory"
                            ? "აქსესუარები"
                            : title === "Self Care"
                            ? "მოვლის საშუალებები"
                            : title === "Meals"
                            ? "საკვები"
                            : "სხვა"}
                        </li>
                      ))
                    ) : (
                      <li>SubCategory does not exist</li>
                    )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ) : (
            <li>Item does not exist</li>
          )}
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
