"use client"
import Image from "next/image";
import Link from "next/link";
import { useScreenSize } from "../../utils/common";
import ContactLinks from "./ContactLinks";


const ContactInfo = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <div
      className="p-4 text-white relative"
      style={{
        background: '#000',
        width: (isMobile || isTablet) ? '100%' : 'calc(40% - 1rem)',
        borderRadius: '11px 11px 0 11px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div>
        <h2 className="font-bold text-xl mb-3">Contact Information</h2>
        <span
          className="mb-16 block"
          style={{ color: '#C9C9C9' }}
        >
          Say something to start a live chat!
        </span>
        <ContactLinks
          linksSpacing="3rem"
          blockBottomSpacing="10rem"
        />
        <div className="flex">
          <Link
            href="/"
            className="mr-2"
          >
            <Image
              src="/images/twitterIcon.svg"
              alt="location"
              width={30}
              height={30}
              className="hover:invert transition duration-300"
            />
          </Link>
          <Link
            href="/"
            className="mr-2"
          >
            <Image
              src="/images/instagramIcon.svg"
              alt="location"
              width={30}
              height={30}
              className="hover:invert transition duration-300"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/discordIcon.svg"
              alt="location"
              width={30}
              height={30}
              className="hover:invert transition duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="big-circle"
        style={{
          width: '260px',
          height: '260px',
          position: 'absolute',
          borderRadius: '50%',
          right: 0,
          bottom: 0,
          transform: 'translate(40%, 40%)',
          background: '#1A1A1A',

        }}
      ></div>
      <div
        className="small-circle"
        style={{
          width: '130px',
          height: '130px',
          position: 'absolute',
          borderRadius: '50%',
          right: 0,
          bottom: 0,
          transform: 'translate(-40%, -40%)',
          background: 'rgba(255,255,255,.1)',
        }}
      ></div>
    </div>
  );
}

export default ContactInfo;