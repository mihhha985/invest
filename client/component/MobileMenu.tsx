"use client"
import {useRef} from "react";
import { usePathname } from 'next/navigation';
import config from '@/config/siteRoutes.json';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsSun} from 'react-icons/bs';
import Image from "next/image";
import Link from "next/link";
import routes from "@/config/siteRoutes.json";
import logoLight from "@/public/logo-light.png";
import {BiDollarCircle, BiLineChart, BiTrophy, BiBarChart} from "react-icons/bi";
import {FaMoneyBillTrendUp} from "react-icons/fa6";
import {GiReceiveMoney} from "react-icons/gi";
import {BiXCircle, BiUserCircle} from "react-icons/bi";
import {AiOutlineLock} from "react-icons/ai";
import {GoLink} from "react-icons/go";

function MobileMenu() {

  const pathname = usePathname();
  const item = config.find((item) => item.href === pathname);
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const boxRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handlerRemove = () => {
    console.log("remove");
    const menu = menuRef.current;
    const box = boxRef.current;
    menu.style.transform = "translateX(-100%)";
    box.style.backgroundColor = "rgba(0,0,0,0)";
  }

  const handlerMenu = () => {
    const menu = menuRef.current;
    const box = boxRef.current;
    menu.style.transform = "translateX(0%)";
    box.style.backgroundColor = "rgba(0,0,0,0.5)";
  }

  return ( 
    <>
      <div className="flex justify-between items-center border-b">
        <div onClick={handlerMenu} className="p-5 border border-b-0">
          <AiOutlineMenu />
        </div>
        <div className="p-5">
          <BsSun />
        </div>
      </div>
      <div className="px-5"> 
        <h3 className="text-2xl text-black font-bold mt-3">{item?.text}</h3>
      </div>

      <div ref={boxRef} 
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-0 pointer-events-none transition-colors duration-700">
        <div ref={menuRef} className="flex transition-transform duration-700" style={{transform:"translateX(-100%)"}}>
          <div className="w-9/12 md:w-2/4 h-screen overflow-y-auto bg-white">
            <div className="p-5">
              <Image src={logoLight} alt="Cas Capital" width={180} />
            </div>
            <div className="flex flex-col pointer-events-auto">
              {routes.map((route: {href:string, text:string}) => 
                <Link 
                  className="flex items-center p-4 text-slate-500"
                  style={pathname === route.href ? {borderLeft: "6px solid #39b54a"} : {borderLeft: "6px solid #fff"}}
                  href={route.href} 
                  key={route.href}>
                  {route.href === "/main" && <BiBarChart className="inline-block mr-2" size={20} />}
                  {route.href === "/single-account" && <BiDollarCircle className="inline-block mr-2" size={20} />}
                  {route.href === "/finance-result" && <FaMoneyBillTrendUp className="inline-block mr-2" size={20} />}
                  {route.href === "/deposite-history" && <BiLineChart className="inline-block mr-2" size={20} />}
                  {route.href === "/mentor-single-account" && <BiTrophy className="inline-block mr-2" size={20} />}
                  {route.href === "/withdraw-request" && <GiReceiveMoney className="inline-block mr-2" size={20} />}
                  {route.href === "/profile" && <BiUserCircle className="inline-block mr-2" size={20} />}
                  {route.href === "/security" && <AiOutlineLock className="inline-block mr-2" size={20} />}
                  {route.href === "/referral-program" && <GoLink className="inline-block mr-2" size={20} />}
                  <span>{route.text}</span>
                </Link>
              )}
            </div>
          </div>
          <div onClick={handlerRemove} className="p-1 pointer pointer-events-auto">
            <BiXCircle className="text-white text-5xl" />
          </div>
        </div>
      </div>

    </>
  );
}

export default MobileMenu;