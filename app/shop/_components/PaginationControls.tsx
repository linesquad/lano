"use client";
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
    <div className=" flex gap-2">
      <button
        disabled={currentPage === "1"}
        className=" bg-blue-500 text-white p-1"
        onClick={() => router.push(`shop/?page=${Number(currentPage) - 1}`)}
      >
        Prev
      </button>
      {paginationArray.map((count) => (
        <button
          className=" bg-blue-500 text-white p-1 rounded-full"
          key={count}
          onClick={() => router.push(`shop/?page=${count}`)}
        >
          {count}
        </button>
      ))}

      <button
        disabled={Number(currentPage) === btnCount}
        className=" bg-blue-500 text-white p-1"
        onClick={() => router.push(`shop/?page=${Number(currentPage) + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
