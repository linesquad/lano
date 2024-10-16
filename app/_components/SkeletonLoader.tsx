export default function SkeletonLoader() {
  return (
    <div>
      <div className="pt-[8px] pl-[8px] relative min-w-[150px] w-[150px] md:min-w-[170px] md:w-[170px] lg:min-w-[200px] lg:w-[200px]">
        <div className="w-[150px] h-[150px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] bg-gray-300 animate-pulse rounded-[7px]"></div>

        <div className="w-[60px] h-[32px] bg-gray-300 animate-pulse rounded-[4px] absolute top-[8px] left-[8px]"></div>
      </div>

      <div className="flex items-center gap-[8px] pl-[10px] mt-[8px]">
        <div className="w-[50px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
        <div className="w-[50px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
      </div>

      <div className="mt-[8px]  pl-[10px]">
        <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
