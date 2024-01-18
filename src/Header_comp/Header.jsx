import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

const Header = () => {
  
  return(
    <>
      <header>
        <div>
          <h1 className="logo">!TODO</h1>
        </div>
        <nav>
          <a target="blank" href="https://github.com/massmr/notatodo.git">
            <FontAwesomeIcon className="nav-icon" icon="fa-brands fa-github" />
            <span>Repo</span>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header
