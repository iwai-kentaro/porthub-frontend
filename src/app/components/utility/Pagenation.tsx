"use client";
import { Button, HStack } from "@chakra-ui/react";
import { useCallback } from "react";
type PaginationProps = {
  totalProjects: number;
  currentPage: number;
  parPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = (props: PaginationProps) => {
  const { totalProjects, currentPage, parPage, onPageChange } = props;
  const totalPages = Math.ceil(totalProjects / parPage);

  const handlePrev = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, onPageChange, totalPages]);

  const pagesNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <HStack>
      <Button onClick={handlePrev} disabled={currentPage === 1}>
        前へ{currentPage}
      </Button>
      {pagesNumbers.map((page) => (
        <Button key={page} onClick={() => onPageChange(page)}>
          {page}
        </Button>
      ))}
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        次へ{currentPage}
      </Button>
    </HStack>
  );
};

export default Pagination;
