import Image from "next/image";
import { fetchCategory } from "../api";
import vector from "../../public/images/vector.svg";
import dog from "../../public/images/dog.svg";
import cat from "../../public/images/cat.svg";
import parrot from "../../public/images/parrot.svg";
import { Category } from "@/types/types";

const Filter = async () => {
  const category: Category[] = await fetchCategory();

  return (
    <>
      <div className="tiny:hidden smaller:hidden hidden md:flex">
        <ul className="text-[#000000] text-base font-medium flex gap-5 md:flex-row md:w-full md:justify-between lg:flex lg:flex-col">
          {category.map((item: Category) => (
            <li
              key={item._id}
              className="flex flex-col items-start md:gap-[86px] lg:gap-0 cursor-pointer"
            >
              <div className="flex items-center justify-between w-full">
                <span className="hover:text-[#EE5335]">
                  {item.title === "Dogs"
                    ? "ძაღლები"
                    : item.title === "Cats"
                    ? "კატები"
                    : item.title === "Birds"
                    ? "ჩიტები"
                    : "სხვა"}
                </span>
                <Image
                  src={vector}
                  alt="vector svg"
                  className="cursor-pointer"
                />
              </div>
              <ul className="overflow-hidden pt-2 w-full">
                {item.subCategory.map((item: Category) => (
                  <li key={item._id}>
                    {item.title === "Toys"
                      ? "სათამაშო"
                      : item.title === "Accessory"
                      ? "აქსესუარები"
                      : item.title === "Self Care"
                      ? "მოვლის საშუალებები"
                      : item.title === "Meals"
                      ? "საკვები"
                      : "სხვა"}
                  </li>
                ))}
              </ul>
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

export default Filter;
