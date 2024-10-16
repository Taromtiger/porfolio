import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const socials = [
  {
    icon: <RiInstagramFill />,
    path: '',
  },
  {
    icon: <FaFacebookF />,
    path: '',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
  {
    icon: <FaLinkedin />,
    path: '',
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyles}>
          <span>{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
