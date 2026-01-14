import NextIcon from "@/assets/icons/nextjs.svg";
import { TIcon } from "./types";

export const ICONS = {
  // TODO: Remove this placeholder after populating the registry
  // `ICONS` must contain at least one entry for appropriate type inference
  next: {
    label: "Next.js",
    svg: NextIcon,
  },
} satisfies Record<string, TIcon>;
