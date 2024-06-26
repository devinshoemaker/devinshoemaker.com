import {
  faDev,
  faGithub,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import NavBarExternalLink from './NavBarExternalLink';
import NavBarLink from './NavBarLink';

function NavBar() {
  return (
    <div className="flex justify-between items-center h-16 w-full bg-gray-900 dark:bg-black shadow-lg z-10 fixed top-0 overflow-auto">
      <nav className="flex">
        <NavBarLink label="Home" href="/" />
        <NavBarLink label="Blog" href="/blog" />
        <NavBarLink label="Projects" href="/projects" />
        <NavBarLink label="Appearances" href="/appearances" />
      </nav>
      <div className="flex ml-6">
        <NavBarExternalLink href="https://dev.to/devinshoemaker" icon={faDev} />
        <NavBarExternalLink
          href="https://twitch.tv/paranoidcoder"
          icon={faTwitch}
        />
        <NavBarExternalLink
          href="https://twitter.com/paranoidcoder"
          icon={faTwitter}
        />
        <NavBarExternalLink
          href="https://github.com/devinshoemaker"
          icon={faGithub}
        />
      </div>
    </div>
  );
}

export default NavBar;
