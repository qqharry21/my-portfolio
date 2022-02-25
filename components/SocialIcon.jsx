/** @format */
import Link from 'next/link';

const SocialIcon = ({ title, icon, href }) => {
  return (
    <Link href={href} alt={title}>
      <a className='social-icon'>{icon}</a>
    </Link>
  );
};

export default SocialIcon;
