import NavBarLink from './NavBarLink';

function NavBar() {
  return (
    <nav className="pl-6 h-16 w-full flex items-center bg-gray-900 dark:bg-black shadow-lg z-10 fixed top-0 overflow-auto">
      <NavBarLink label="Home" href="/" />
      <NavBarLink label="Blog" href="/blog" />
      {/* <NavBarLink label="About" href="/about" /> */}
      <NavBarLink
        label="GitHub"
        href="https://github.com/devinshoemaker"
        external={true}
      />
    </nav>
  );
}

export default NavBar;
