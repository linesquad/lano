import Image from "next/image";
// import { fetchCategory } from "../../api";
import dog from "../../../../public/images/dog.svg";
import cat from "../../../../public/images/cat.svg";
import parrot from "../../../../public/images/parrot.svg";
import { Category } from "@/types/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { fetchCategory } from "@/app/api";
import { Link } from "@/navigation";

const Filter = async ({ locale }: { locale: string }) => {
  const categories: Category[] = await fetchCategory();

  const animalIcons = [
    { id: 1, src: dog, alt: "Dog", title: "ძაღლი" },
    { id: 2, src: cat, alt: "Cat", title: "კატა" },
    { id: 3, src: parrot, alt: "Parrot", title: "ჩიტი" },
  ];
  console.log(locale);
  return (
    <>
      <div className="tiny:hidden smaller:hidden hidden md:flex">
        <Accordion
          type="multiple"
          className="w-full sm:flex sm:items-center sm:gap-16 sm:justify-start md:block"
        >
          {categories.map((item: Category) => (
            <AccordionItem
              key={item._id}
              value={item.title}
              className="border-0"
            >
              <AccordionTrigger className="flex items-center justify-between w-full cursor-pointer border-0">
                <span className="font-medium text-[#000] hover:text-[#EE5335] transition-all duration-300 ease-in-out">
                  {locale == "ka"
                    ? item.title.split("/")[0]
                    : locale == "en"
                    ? item.title.split("/")[1]
                    : item.title.split("/")[2]}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-2 w-full">
                <ul className="m-0 p-0">
                  {item.subCategory.map((subItem: Category) => (
                    <li
                      key={subItem._id}
                      className="py-1 cursor-pointer hover:text-[#EE5335] transition-all duration-300 ease-in-out"
                    >
                      <Link
                        href={`/shop/${item.title}/${subItem.title}/${subItem._id}`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="tiny:flex smaller:flex flex md:hidden gap-4">
        {animalIcons.map((animal) => (
          <DropdownMenu key={animal.id}>
            <DropdownMenuTrigger asChild>
              <div>
                <Image
                  src={animal.src}
                  alt={animal.alt}
                  className="cursor-pointer"
                />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white p-3 rounded-lg shadow-lg">
              {categories
                .filter((category) => category.title === animal.title)
                .map((item) => (
                  <ul key={item._id}>
                    {item.subCategory.map((subItem: Category) => (
                      <DropdownMenuItem
                        key={subItem._id}
                        className="cursor-pointer hover:text-[#EE5335] p-2 transition-all 
                        duration-300 ease-in-out text-[#000] font-medium"
                      >
                        <Link
                          href={`/shop/${item.title}/${subItem.title}/${subItem._id}`}
                        >
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </ul>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
    </>
  );
};

export default Filter;
