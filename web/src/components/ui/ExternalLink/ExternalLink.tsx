import clsx from "clsx";
import { ReactNode } from "react";

type TExternalLinkProps = {
  href: string;
  italicize?: boolean;
  children: ReactNode;
};

const ExternalLink = ({ href, italicize, children }: TExternalLinkProps) => (
  <a className={clsx("app-text-link", { italic: italicize })} href={href} target="_blank">
    {children}
  </a>
);

export default ExternalLink;
