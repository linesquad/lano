export default function SkeletonLoader() {
  return (
    <div className="flex gap-[27px] md:gap-[6px] lg:gap-[20px] overflow-hidden">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="relative min-w-[150px] flex-wrap w-[150px] md:min-w-[145px] md:w-[145px] lg:min-w-[170px] lg:w-[200px] transition duration-300"
        >
          <div className="w-full h-[150px] md:h-[170px] lg:h-[190px] bg-gray-300 animate-pulse rounded-[7px]"></div>

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
  );
}
