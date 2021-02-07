import Link from 'next/link';

interface NavBarLinkProps {
  href: string;
  label: string;
}

function NavBarLink({ label, href }: NavBarLinkProps) {
  return (
    <ul style={{ height: 'fit-content' }}>
      <Link href={href}>
        <a className="mr-4 text-xl text-gray-100 no-underline">{label}</a>
      </Link>
    </ul>
  );
}

export default NavBarLink;
