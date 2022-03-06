/** @format */
import Link from 'next/link';

const SocialIcon = ({ title, icon, href }) => {
  return (
    <Link href={href} alt={title}>
      <a className='social-icon' target='_blank' rel='noopener noreferrer'>
        {icon}
      </a>
    </Link>
  );
};

export default SocialIcon;
