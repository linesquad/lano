"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ btnCount }: { btnCount: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const paginationItems = () => {
    const items = [];
    const totalPages = btnCount;

    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      items.push(i);
    }
    if (currentPage > 4) {
      items.push("...");
    }
    for (
      let i = Math.max(4, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      items.push(i);
    }

    if (currentPage < totalPages - 3) {
      items.push("...");
    }
    if (totalPages > 1) {
      items.push(totalPages);
    }
    return items;
  };

  const items = paginationItems();

  return (
    <div className="flex justify-center gap-2 pt-[80px]">
      <button
        disabled={currentPage === 1}
        className="text-white p-1"
        onClick={() => router.push(`shop/?page=${currentPage - 1}`)}
      >
        <Image
          src="/images/noun-arrow-2335663 2.svg"
          alt="prev arrow"
          width={24}
          height={24}
          className="rotate-180"
        />
      </button>

      {items.map((item, index) =>
        typeof item === "number" ? (
          <button
            key={item}
            className={`${
              currentPage === item
                ? "bg-[#EE5335] text-white w-[32px] h-[32px] rounded-[2px]"
                : "text-black"
            } p-1 text-[14px] font-[600] cursor-pointer rounded-full`}
            onClick={() => router.push(`shop/?page=${item}`)}
          >
            {item}
          </button>
        ) : (
          <span key={`ellipsis-${index}`}>...</span>
        )
      )}

      <button
        disabled={currentPage === btnCount}
        className="text-white p-1"
        onClick={() => router.push(`shop/?page=${currentPage + 1}`)}
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
