"use client";
import { FC } from "react";
import { IChildren } from "@/types";
import { Provider } from "react-redux";
import { store } from "@/store";

export const Providers: FC<IChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
