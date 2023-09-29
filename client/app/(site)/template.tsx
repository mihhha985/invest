"use client"
import { useEffect, useState } from 'react';
import {useRouter} from "next/navigation";
import MainHeader from "@/component/MainHeader";
import SaidBar from "@/component/MainSaidbar";
import MobileMenu from "@/component/MobileMenu";
import axios from "axios";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function checkToken() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
        }else{
          const res = await axios.get(process.env.API_URL + "/user/check?token=" + token);
          console.log(res);
          if(res.status === 200){
            console.log('ok');
            setIsLoading(true);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.token);
          }
        }
      } catch (error) {
        console.log(error);
        router.push("/login");
      }
    }

    checkToken();
  }, []);
  
  if(isLoading){
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
  }else{
    return <div>Загрузка...</div>
  }
}