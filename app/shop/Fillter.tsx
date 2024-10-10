import Image from "next/image";
import vector from "../../public/images/vector.svg";
import dog from "../../public/images/dog.svg";
import cat from "../../public/images/cat.svg";
import parrot from "../../public/images/parrot.svg";

const Fillter = () => {
  return (
    <>
      <div className="tiny:hidden smaller:hidden hidden md:flex">
        <ul className="text-[#000000] text-base font-medium flex gap-5 md:flex-row md:w-full md:justify-between lg:flex lg:flex-col">
          <li className="flex items-center justify-between md:gap-[86px] lg:gap-0">
            <span>ძაღლები</span>
            <Image src={vector} alt="vector svg" className="cursor-pointer" />
          </li>
          <li className="flex items-center justify-between md:gap-[86px] lg:gap-0">
            <span>კატები</span>
            <Image src={vector} alt="vector svg" className="cursor-pointer" />
          </li>
          <li className="flex items-center justify-between md:gap-[86px] lg:gap-0">
            <span>ჩიტები</span>
            <Image src={vector} alt="vector svg" className="cursor-pointer" />
          </li>
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
