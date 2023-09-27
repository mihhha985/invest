"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import routes from "@/config/siteRoutes.json";
import logoLight from "@/public/logo-light.png";
import {BiDollarCircle, BiLineChart, BiTrophy, BiBarChart} from "react-icons/bi";
import {FaMoneyBillTrendUp} from "react-icons/fa6";
import {GiReceiveMoney} from "react-icons/gi";
import {BiUserCircle} from "react-icons/bi";
import {AiOutlineLock} from "react-icons/ai";
import {GoLink} from "react-icons/go";
import "@/styles/site.scss"

function SideBar() {
  const pathname = usePathname();
  return ( 
    <div className="sidebar-box">
      <div className="logo-box">
        <Image src={logoLight} alt="Cas Capital" width={180} priority={true}/>
      </div>
      <div className="flex flex-col">
        {routes.map((route: {href:string, text:string}) => 
          <Link 
            className="flex items-center p-4 text-slate-500 hover:text-sky-600 hover:bg-slate-50"
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
  );
}

export default SideBar;