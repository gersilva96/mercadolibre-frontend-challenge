import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { categoryListSelector } from "state/features/productDetail/selectors";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { getItemsUrl } from "utils/pages";
import classes from "./BreadCrumb.module.scss";

export interface BreadCrumbProps {
  className?: string;
}

export const BreadCrumb: FC<BreadCrumbProps> = ({ className }) => {
  const categoryList = useSelector(categoryListSelector);
  return (
    <Breadcrumb
      className={getClassName(classes.container, className)}
      separator={<FaChevronRight className={classes.chevronIcon} />}
    >
      {categoryList.map((category) => (
        <BreadcrumbItem key={category.id}>
          <Link href={getItemsUrl({ category: category.id })}>
            <a className={classes.breadCrumbItem}>{category.name}</a>
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
