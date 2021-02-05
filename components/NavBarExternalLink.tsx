import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface NavBarExternalLinkProps {
  href: string;
  icon: IconProp;
}

function NavBarExternalLink({ href, icon }: NavBarExternalLinkProps) {
  return (
    <a href={href} target="blank" className="ml-6">
      <FontAwesomeIcon
        icon={icon}
        color="white"
        size="lg"
        className="text-gray-900 dark:text-gray-100"
      />
    </a>
  );
}

export default NavBarExternalLink;
