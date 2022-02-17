import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  HiChevronLeft as ChevronLeftIcon,
  HiChevronRight as ChevronRightIcon
} from "react-icons/hi";
import { useSelector } from "react-redux";
import {
  onNextPageButtonClick,
  onPreviousPageButtonClick
} from "state/features/searchResult/events";
import {
  currentPageSelector,
  totalPagesSelector
} from "state/features/searchResult/selectors";
import { useAppDispatch } from "state/store";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./Pagination.module.scss";

export interface PaginationProps {
  className?: string;
}

const tkPagination = tk.page.searchResult.component.pagination;

export const Pagination: FC<PaginationProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);
  return (
    <div className={getClassName(classes.container, className)}>
      {currentPage > 1 && (
        <Button
          variant="ghost"
          colorScheme="blue"
          leftIcon={<ChevronLeftIcon />}
          onClick={() => dispatch(onPreviousPageButtonClick())}
        >
          {t(tkPagination.previousButton)}
        </Button>
      )}
      <div className={classes.pagesCountContainer}>
        <div className={classes.currentPageContainer}>
          <span className={classes.currentPage}>{currentPage}</span>
        </div>
        <span className={classes.totalPages}>
          {t(tkPagination.totalPages, { totalPages })}
        </span>
      </div>
      <Button
        variant="ghost"
        colorScheme="blue"
        rightIcon={<ChevronRightIcon />}
        onClick={() => dispatch(onNextPageButtonClick())}
      >
        {t(tkPagination.nextButton)}
      </Button>
    </div>
  );
};
