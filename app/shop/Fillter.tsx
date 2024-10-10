import Image from "next/image";
import vector from "../../public/images/vector.svg";
import dog from "../../public/images/dog.svg";
import cat from "../../public/images/cat.svg";
import parrot from "../../public/images/parrot.svg";

const Fillter = () => {
  return (
    <>
      <div className="tiny:hidden">
        <ul className="text-[#000000] text-base font-medium flex flex-col gap-5">
          <li className="flex items-center justify-between">
            <span>ძაღლები</span>
            <Image src={vector} alt="vector svg" className="cursor-pointer" />
          </li>
          <li className="flex items-center justify-between">
            <span>კატები</span>
            <Image src={vector} alt="vector svg" className="cursor-pointer" />
          </li>
          <li className="flex items-center justify-between">
            <span>ჩიტები</span>
            <Image src={vector} alt="vector svg" className="cursor-pointer" />
          </li>
        </ul>
      </div>

      <div className="tiny:flex">
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
