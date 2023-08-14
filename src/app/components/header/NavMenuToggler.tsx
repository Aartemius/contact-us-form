"use client"
import { FC } from "react";
import Image from "next/image";
import { useScreenSize } from "@/app/utils/common";

interface NavMenuTogglerProps {
  onClick: () => void;
}

const NavMenuToggler: FC<NavMenuTogglerProps> = ({ onClick }) => {
  const { isMobile } = useScreenSize();

  return (
    <>
      {isMobile &&
        <Image
          src="/images/navTogglerIcon.svg"
          alt="cart"
          width={24}
          height={24}
          style={{ cursor: 'pointer' }}
          onClick={ onClick }
        />
      }
    </>
  );
}

export default NavMenuToggler;