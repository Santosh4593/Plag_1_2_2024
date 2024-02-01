import { Link } from "react-router-dom";

const routes = [
  {
    title: "Text",
    description: "Check similarity between texts.",
    route: "/text-similarity",
  },
  {
    title: "File",
    description: "Check similarity between documents.",
    route: "/document-similarity",
  },
  {
    title: "OCR",
    description: "Check for plagiarism in images.",
    route: "/image-plagiarism-check",
  },
  {
    title: "Compare Text",
    description: "Compare multiple documents.",
    route: "/compare-text",
  },
  {
    title: "Compare File",
    description: "Compare multiple documents.",
    route: "/compare-file",
  },
];

const Guidelines = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex justify-between">
            {routes.slice(0, 3).map((route, index) => (
              <Link to={route.route} key={index}>
                <button className="rounded-full bg-cyan-500 text-black font-semibold px-4 py-2 m-2 circle-button">
                  {route.title}
                </button>
              </Link>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            {routes.slice(3, 5).map((route, index) => (
              <Link to={route.route} key={index}>
                <button className="rounded-full bg-cyan-500 text-black font-semibold px-4 py-2 m-2 circle-button">
                  {route.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;

// CSS styling for the circular buttons
const styles = `
  .circle-button {
    width: 100px; /* Adjust size as needed */
    height: 100px; /* Adjust size as needed */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// Dynamically inject the styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
