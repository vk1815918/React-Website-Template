import {
  faHome,
  faInfoCircle,
  faCog,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define an interface for the props of the NavItem component
interface NavItemProps {
  icon: any;
  link: string;
}

// Define a functional component named NavItem
const NavItem: React.FC<NavItemProps> = ({ icon, link }) => {
  // Return a JSX element that renders the icon and link props as a list item with an anchor tag
  return (
    <li className="nav-item">
      <a href={link}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
};

// Define an array of objects that represent the navigation items
const navItems = [
  { icon: faHome, link: "#" },
  { icon: faInfoCircle, link: "#" },
  { icon: faCog, link: "#" },
  { icon: faEnvelope, link: "#" },
];

// Define a functional component named Header
const Header: React.FC = () => {
  // Return a JSX element that renders the header of the website
  return (
    <div className="header">
      <h1>My Website</h1>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} link={item.link} />
        ))}
      </ul>
    </div>
  );
};

export default Header;
