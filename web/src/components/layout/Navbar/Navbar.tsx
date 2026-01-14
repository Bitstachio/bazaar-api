import { NAV_LINKS } from "./Navbar.constants";

const Navbar = () => (
  <nav>
    <ul className="flex gap-3 py-3">
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
