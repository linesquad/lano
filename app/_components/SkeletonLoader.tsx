export default function SkeletonLoader() {
  const quantity = 5;
  return (
    <div className="w-full">
      <div className="flex justify-around w-full gap-[27px]  overflow-hidden">
        {Array.from({ length: quantity }).map((_, index) => (
          <div
            key={index}
            className="
            flex-shrink-0 
            w-[calc(50%-13.5px)] 
            sm:w-[calc(33.333%-18px)] 
            md:w-[calc(25%-20px)] 
            lg:w-[calc(20%-22px)] 
            transition duration-300
          "
          >
            <div className="w-full h-[150px] md:h-[160px] lg:h-[180px] bg-gray-300 animate-pulse rounded-[7px]"></div>

            <div className="w-[60px] h-[32px] bg-gray-300 animate-pulse rounded-[4px] absolute top-2 left-2"></div>

            <div className="p-2">
              <div className="flex items-center gap-2 mt-2">
                <div className="w-[50px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
                <div className="w-[50px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
              </div>

              <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
