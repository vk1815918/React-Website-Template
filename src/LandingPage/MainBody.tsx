import {
  faHome,
  faInfoCircle,
  faCog,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const bodyItems = [
  {
    title: "Home",
    icon: faHome,
    text: "This is where you can find the main information about my website.",
  },
  {
    title: "About",
    icon: faInfoCircle,
    text: "This is where you can learn more about me and my background.",
  },
  {
    title: "Services",
    icon: faCog,
    text: "This is where you can see what I can offer you and how I can help you.",
  },
  {
    title: "Contact",
    icon: faEnvelope,
    text: "This is where you can get in touch with me and send me your feedback.",
  },
];

// Define a functional component named Main
const Main: React.FC = () => {
  // Return a JSX element that renders the main content of the website
  return (
    <div className="main">
      <div className="hero">
        <h2>Welcome to my website!</h2>
        <p>
          This is a basic template website made with React TypeScript.
          Feel free to use it in any way you wish!
        </p>
        <button>Learn More</button>
      </div>

      <div className="features">
        <div
          className="feature"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {bodyItems.map(({ title, icon, text }) => (
            <div
              key={title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px",
                padding: "10px",
              }}
            >
              <FontAwesomeIcon icon={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
