import Link from 'next/link';

interface NavBarLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

function NavBarLink({ label, href, external = false }: NavBarLinkProps) {
  return (
    <ul style={{ height: 'fit-content' }}>
      {external ? (
        <a href={href} target="blank" className="mr-4 text-xl text-gray-100">
          {label}
        </a>
      ) : (
        <Link href={href}>
          <a className="mr-4 text-xl text-gray-100">{label}</a>
        </Link>
      )}
    </ul>
  );
}

export default NavBarLink;
