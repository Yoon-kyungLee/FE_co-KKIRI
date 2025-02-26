import * as S from "./styled";
import { PAGINATION_ICONS } from "@/constants/paginationIcons";
import { useWindowSize } from "usehooks-ts";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
  totalPages: number;
}

export default function Pagination({ currentPage, setCurrentPage, totalPages }: PaginationProps) {
  const { width: screenWidth } = useWindowSize();
  const isMobile = screenWidth < 768;
  const maxVisiblePages = isMobile ? 5 : 9;

  const goToPrevBlock = () => {
    const currentBlockStart = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
    setCurrentPage(Math.max(currentBlockStart - maxVisiblePages, 1));
  };
  const goToNextBlock = () => {
    const currentBlockStart = Math.ceil(currentPage / maxVisiblePages) * maxVisiblePages - maxVisiblePages + 1;
    const nextBlockStart = Math.min(currentBlockStart + maxVisiblePages, totalPages);
    setCurrentPage(nextBlockStart);
  };
  const goToPrevPage = () => setCurrentPage(Math.max(currentPage - 1, 1));
  const goToNextPage = () => setCurrentPage(Math.min(currentPage + 1, totalPages));
  const goToPage = (pageNumber: number) => setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = isMobile ? 5 : 9;
    const currentBlockStart = Math.ceil(currentPage / maxVisiblePages) * maxVisiblePages - maxVisiblePages + 1;
    const currentBlockEnd = Math.min(totalPages, currentBlockStart + maxVisiblePages - 1);

    if (currentPage > 1) {
      pageNumbers.push(
        <S.PageDoubleLeftArrow key="prevBlock" onClick={goToPrevBlock}>
          <img src={PAGINATION_ICONS.prevBlock.src} alt={PAGINATION_ICONS.prevBlock.alt} />
        </S.PageDoubleLeftArrow>,
      );
      pageNumbers.push(
        <S.PageLeftArrow key="prev" onClick={goToPrevPage}>
          <img src={PAGINATION_ICONS.prevPage.src} alt={PAGINATION_ICONS.prevPage.alt} />
        </S.PageLeftArrow>,
      );
    } else {
      pageNumbers.push(
        <S.PageDoubleLeftArrow key="prevBlock" onClick={goToPrevBlock} disabled>
          <img src={PAGINATION_ICONS.prevBlockDisabled.src} alt={PAGINATION_ICONS.prevBlockDisabled.alt} />
        </S.PageDoubleLeftArrow>,
      );
      pageNumbers.push(
        <S.PageLeftArrow key="prev" onClick={goToPrevPage} disabled>
          <img src={PAGINATION_ICONS.prevPageDisabled.src} alt={PAGINATION_ICONS.prevPageDisabled.alt} />
        </S.PageLeftArrow>,
      );
    }

    for (let i = currentBlockStart; i <= currentBlockEnd; i++) {
      pageNumbers.push(
        <S.PageNumber key={i} onClick={() => goToPage(i)} $active={currentPage === i}>
          {i}
        </S.PageNumber>,
      );
    }

    if (currentPage < totalPages) {
      pageNumbers.push(
        <S.PageRightArrow key="next" onClick={goToNextPage}>
          <img src={PAGINATION_ICONS.nextPage.src} alt={PAGINATION_ICONS.nextPage.alt} />
        </S.PageRightArrow>,
      );
      pageNumbers.push(
        <S.PageDoubleRightArrow key="nextBlock" onClick={goToNextBlock}>
          <img src={PAGINATION_ICONS.nextBlock.src} alt={PAGINATION_ICONS.nextBlock.alt} />
        </S.PageDoubleRightArrow>,
      );
    } else {
      pageNumbers.push(
        <S.PageRightArrow key="next" onClick={goToNextPage} disabled>
          <img src={PAGINATION_ICONS.nextPageDisabled.src} alt={PAGINATION_ICONS.nextPageDisabled.alt} />
        </S.PageRightArrow>,
      );
      pageNumbers.push(
        <S.PageDoubleRightArrow key="nextBlock" onClick={goToNextBlock} disabled>
          <img src={PAGINATION_ICONS.nextBlockDisabled.src} alt={PAGINATION_ICONS.nextBlockDisabled.alt} />
        </S.PageDoubleRightArrow>,
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <S.PaginationContainer>{renderPageNumbers()}</S.PaginationContainer>
    </div>
  );
}
