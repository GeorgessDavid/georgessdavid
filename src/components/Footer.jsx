import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/GeorgessDavid" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl" title="GitHub" /></a>
            <a href="https://www.linkedin.com/in/georges-david/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl" title="LinkedIn" /></a>
            <a href="mailto:georgesdavid.dev@gmail.com" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2xl" title="Gmail" /></a>
        </footer>
    )
}
