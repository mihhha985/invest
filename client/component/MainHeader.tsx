"use client"
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';
import {BsSun} from 'react-icons/bs';
import {BsMoon} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import config from '@/config/siteRoutes.json';
import '@/styles/site.scss';



function MainHeader() {
  const pathname = usePathname();
  const item = config.find((item) => item.href === pathname);
  const [theme, setTheme] = useState<string>('light');
  const [user, setUser] = useState<string>('Unknown');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user) {
      const data = JSON.parse(user);
      setUser(data.lastName + ' ' + data.firstName + ' ' + data.middleName);
    }  
  }, []);

  useEffect(() => {
    if(theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return ( 
    <div className="header-box">
      <div className="header-top">
        {theme === 'light'
          ? <button onClick={() => setTheme('dark')}><BsMoon /></button>
          : <button onClick={() => setTheme('light')}><BsSun /></button>
        }
        <h4>
          <span>{user}</span>
          <IoIosArrowDown id="arrowBottom"/>
        </h4>
      </div>
      <div className="header-title">
        <h3>{item?.text}</h3>
      </div>
    </div>
  );
}

export default MainHeader;