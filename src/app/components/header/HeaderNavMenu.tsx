import Link from 'next/link';
import Image from "next/image";
import { FC } from 'react';

interface HeaderNavMenuProps {
  isMobileNavVisible: boolean;
  onCloseClick: () => void;
}

const HeaderNavMenu: FC<HeaderNavMenuProps> = ({ isMobileNavVisible, onCloseClick }) => {
  
  return (
    <nav className={ `header-nav ${ isMobileNavVisible ? 'open' : '' }` }>
      <Image
        src="/images/closeIcon.svg"
        alt="close"
        width={25}
        height={25}
        className="close-icon"
        onClick={onCloseClick}
      />
      <ul className="flex">
        <li>
          <Link
            href="/"
            className="text-2xl text-white font-bold logo-link"
          >
            Logo Here
          </Link>
        </li>
        <li><Link href="/">Home</Link></li>
        <li>
          <Link href="/">
            <span className="mr-1">Features</span>
            <Image
              src="/images/arrowDown.svg"
              alt="dropdown"
              width={9}
              height={9}
              className="inline"
            />
          </Link>
        </li>
        <li><Link href="/">Blog</Link></li>
        <li><Link href="/">Shop</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Contact</Link></li>
        <li className="flex items-center">
          <Link
            href="/"
            className="mr-7 flex justify-center items-center"
            style={{ 
              padding: '6px',
              borderRadius: '50%',
              border: '1px solid #000',
              width: '35px',
              height: '35px'
            }}
          >
            <Image
              src="/images/profileIcon.svg"
              alt="profile"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center"
            style={{ 
              padding: '6px',
              borderRadius: '50%',
              border: '1px solid #000',
              width: '35px',
              height: '35px'
            }}
          >
            <Image
              src="/images/cartIcon.svg"
              alt="cart"
              width={20}
              height={20}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavMenu;