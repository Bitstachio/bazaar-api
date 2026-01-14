import { ROUTES } from "@/lib/constants/routes";
import { TNavLink } from "./Navbar.types";

export const NAV_LINKS: TNavLink[] = [
  {
    id: "home",
    href: ROUTES.HOME,
    label: "Home",
  },
  {
    id: "about",
    href: ROUTES.ABOUT,
    label: "About",
  },
];
