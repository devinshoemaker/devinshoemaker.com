import Link from 'next/link';

interface NavBarLinkProps {
  href: string;
  label: string;
}

function NavBarLink({ label, href }: NavBarLinkProps) {
  return (
    <ul style={{ height: 'fit-content' }} className="ml-6">
      <Link href={href}>
        <a className="text-xl text-gray-100 no-underline">{label}</a>
      </Link>
    </ul>
  );
}

export default NavBarLink;
