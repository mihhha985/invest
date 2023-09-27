"use client"
import { useEffect } from 'react';
import {useRouter} from "next/navigation";
import MainHeader from "@/component/MainHeader";
import SaidBar from "@/component/MainSaidbar";
import MobileMenu from "@/component/MobileMenu";
import axios from "axios";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    async function checkToken() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
        }else{
          const res = await axios.get(process.env.API_URL + "/user/check?token=" + token);
          console.log(res);
        }
      } catch (error) {
        console.log(error);
        router.push("/login");
      }
    }

    checkToken();
  }, []);
  
  return (
    <div className="site-container">
      <div className="sidebar bg-white">
        <SaidBar />
      </div>
      <div className="header">
        <MainHeader />
      </div>
      <div className="mobile-menu">
        <MobileMenu />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}