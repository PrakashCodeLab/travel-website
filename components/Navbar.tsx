import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/hilink-logo.svg';
import { NAV_LINKS } from "@/constants/constants.index";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-50 py-5 ">
       <Link href={'/'}>
          <Image src={Logo} width={74} height={29} alt="logo" />
       </Link>
       <ul className="hidden h-full gap-12 lg:flex">
          {
            NAV_LINKS.map(link=>(
              <Link key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transtion-all hover:font-bold "  href={link.href}>
                <p>{link.label}</p>
              </Link>
            )) 
          }
      </ul>
      <div className="lg:flexCenter hidden "> 
       <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"/>
      </div>

      <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/> 
    </nav>
  );
}

export default Navbar;
