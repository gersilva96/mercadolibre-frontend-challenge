import { FC } from "types/react";

export interface DetailContainerProps {
  className?: string;
}

export enum ProductCondition {}

export const DetailContainer: FC<DetailContainerProps> = ({ className }) => (
  <div className={className}>
    <p>DetailContainer</p>
  </div>
);
