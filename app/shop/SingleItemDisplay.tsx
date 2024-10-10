import { SingleItemDisplayProps } from "@/types/types";
import Image from "next/image";

const SingleItemDisplay: React.FC<SingleItemDisplayProps> = ({
  title,
  image,
  price,
  discount,
}) => {
  return (
    <>
      <div>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          // className="object-cover"
          // className="tiny:max-w-[157px] tiny:max-h-[157px]"
        />
      </div>
      <div>
        <p>{price}</p>
      </div>
      <div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default SingleItemDisplay;
{
  /* {data.map((item) => (
              <div key={item._id} className="p-4 border rounded shadow">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <p className="mt-2 text-gray-700">{item.price}</p>
                {item.discount > 0 && (
                  <span className="text-sm text-red-500">
                    {item.discount}% off
                  </span>
                )}
              </div>
            ))} */
}
