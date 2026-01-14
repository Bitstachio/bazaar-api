import { FC, SVGProps } from "react";
import { ICONS } from "./registry";

export type TIcon = {
  label: string;
  svg: FC<SVGProps<SVGElement>>;
};

export type TIconName = keyof typeof ICONS;
