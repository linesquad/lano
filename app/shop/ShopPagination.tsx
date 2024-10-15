"use client"
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import SingleItemDisplay from "./SingleItemDisplay";
import { Product } from "@/types/types";

type ShopPaginationProps = {
  products: Product[];
  itemsPerPage: number;
};

const ShopPagination: React.FC<ShopPaginationProps> = ({
  products,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="grid grid-cols-3 gap-6 tiny:grid-cols-2 smaller:grid-cols-2 md:grid-cols-4">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div
                key={item._id}
                className="tiny:max-w-[157px] tiny:max-h-[233px]"
              >
                <SingleItemDisplay item={item} />
              </div>
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      </div>
      {totalItems > itemsPerPage && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              />
              {currentPage > 1 && (
                <PaginationItem>
                  <button
                    className={`pagination-link ${currentPage === 1 ? 'bg-[#EE5335] text-white' : ''}`}
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </button>
                </PaginationItem>
              )}
              {currentPage > 2 && <PaginationEllipsis />}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(Math.max(0, currentPage - 2), currentPage + 1)
                .map((page) => (
                  <PaginationItem key={page}>
                    <button
                      className={`pagination-link ${page === currentPage ? 'w-[22px] rounded-[4px] bg-[#EE5335] text-white' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </PaginationItem>
                ))}
              {currentPage < totalPages - 1 && <PaginationEllipsis />}
              {currentPage < totalPages && (
                <PaginationItem>
                  <button
                    className={`pagination-link ${currentPage === totalPages ? 'w-[22px] rounded-[4px] bg-[#EE5335] text-white' : ''}`}
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                </PaginationItem>
              )}
              <PaginationNext
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              />
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ShopPagination;