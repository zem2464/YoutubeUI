import React from "react";
import { HomeWrapperComponent } from "./HomeWrapper.style";

export const HomeWrapper = (props) => {
  return <HomeWrapperComponent>{props.children}</HomeWrapperComponent>;
};
