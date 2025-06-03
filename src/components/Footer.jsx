import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-[#212529] text-[#F83D3D] py-4 px-8 border-t-2 border-[#F83D3D] gap-4">
      <a
        href="https://github.com/GeorgessDavid"
        target="_blank"
        rel="noreferrer"
        className="text-[#F83D3D] hover:text-white transition-all duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faGithub} size="2xl" title="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/georges-david/"
        target="_blank"
        rel="noreferrer"
        className="text-[#F83D3D] hover:text-white transition-all duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2xl" title="LinkedIn" />
      </a>
      <a
        href="mailto:georgesdavid.dev@gmail.com"
        rel="noreferrer"
        className="text-[#F83D3D] hover:text-white transition-all duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2xl" title="Gmail" />
      </a>
    </footer>
  );
};
