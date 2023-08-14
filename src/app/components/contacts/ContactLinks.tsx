import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface ContactLinksProps {
  linksSpacing?: string;
  blockBottomSpacing?: string;
  mobileIconsAlign?: "items-center" | "items-start";
}

const ContactLinks: FC<ContactLinksProps> = ({
  linksSpacing,
  blockBottomSpacing,
  mobileIconsAlign,
}) => {

  return (
    <div style={{ marginBottom: blockBottomSpacing || '' }}>
      <Link
        href="tel:+10123456789"
        className={`flex ${mobileIconsAlign ? mobileIconsAlign : 'items-center'} md:items-center flex-col md:flex-row`}
        style={{ marginBottom: linksSpacing || '' }}
      >
        <Image
          src="/images/phoneIcon.svg"
          alt="phone"
          width={24}
          height={24}
          className="mr-3"
        />
        <span className="text-xs lg:text-base">+1012 3456 789</span>
      </Link>
      <Link
        href="mailto:demo@gmail.com"
        style={{ marginBottom: linksSpacing || '' }}
        className={`flex ${mobileIconsAlign ? mobileIconsAlign : 'items-center'} md:items-center flex-col md:flex-row`}
      >
        <Image
          src="/images/mailIcon.svg"
          alt="mail"
          width={24}
          height={24}
          className="mr-3"
        />
        <span className="text-xs lg:text-base">demo@gmail.com</span>
      </Link>
      <Link
        href="/"
        className={`flex ${mobileIconsAlign ? mobileIconsAlign : 'items-center'} md:items-center flex-col md:flex-row`}
      >
        <Image
          src="/images/locationIcon.svg"
          alt="location"
          width={24}
          height={24}
          className="mr-3"
        />
        <span className="text-xs lg:text-base">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
      </Link>
    </div>
  );
}

export default ContactLinks;