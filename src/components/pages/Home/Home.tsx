import { FC } from "types/react";
import { Carousel } from "./Carousel/Carousel";
import classes from "./Home.module.scss";
import { LevelSixSubscription } from "./LevelSixSubscription/LevelSixSubscription";
import { Payments } from "./Payments/Payments";

export const Home: FC = () => (
  <div className={classes.homeContainer}>
    <Carousel />
    <Payments />
    <LevelSixSubscription />
  </div>
);
