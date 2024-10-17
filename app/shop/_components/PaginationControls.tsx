"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ btnCount }: { btnCount: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";

  const paginationArray = Array.from(
    { length: btnCount },
    (_, index) => index + 1
  );

  return (
    <div className=" flex justify-center gap-2 pt-[80px]">
      <button
        disabled={currentPage === "1"}
        className="  text-white p-1 cursor-pointer"
        onClick={() => router.push(`shop/?page=${Number(currentPage) - 1}`)}
      >
        <Image
          src="/images/noun-arrow-2335663 2.svg"
          alt="prev arrow"
          width={24}
          height={24}
          className="rotate-180"
        />
      </button>
      {paginationArray.map((count, index) => {
        const isCurrentPage = +currentPage === count;
        const isNearLastPages = count > paginationArray.length - 3;
        const showEllipsis =
          (index === 4 && count < paginationArray.length - 2) ||
          (index === 3 && count < paginationArray.length - 1);

        if (
          count === 1 ||
          count === 2 ||
          count <= +currentPage + 1 ||
          isNearLastPages
        ) {
          return (
            <button
              className={`${
                isCurrentPage &&
                "bg-[#EE5335] text-[white] w-[32px] h-[32px] rounded-[2px]"
              } text-black p-1 text-[14px] font-[600] rounded-full`}
              key={count}
              onClick={() => router.push(`shop/?page=${count}`)}
            >
              {count}
            </button>
          );
        }

        if (showEllipsis) {
          return <span key={`ellipsis-${index}`}>...</span>;
        }

        return null;
      })}

      <button
        disabled={Number(currentPage) === btnCount}
        className=" text-white p-1 cursor-pointer"
        onClick={() => router.push(`shop/?page=${Number(currentPage) + 1}`)}
      >
        <Image
          src="/images/noun-arrow-2335663 2.svg"
          alt="next arrow"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default PaginationControls;
