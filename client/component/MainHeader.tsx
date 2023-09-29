"use client"
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';
import { BiExit } from 'react-icons/bi';
import config from '@/config/siteRoutes.json';
import '@/styles/site.scss';



function MainHeader() {
  const pathname = usePathname();
  const item = config.find((item) => item.href === pathname);
  const [user, setUser] = useState<string>('Unknown');

  useEffect(() => {
    
    const user = localStorage.getItem('user');
    
    if(user && user !== undefined) {
      try{
        const data = JSON.parse(user);
        setUser(data.lastName + ' ' + data.firstName + ' ' + data.secondName);
      }catch(e){
        throw e;
      }
    } 
    
    console.log(user);
    
  }, []);

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return ( 
    <div className="header-box">
      <div className="header-top">
        <div className='flex space-x-1'>
          <h4 className="text-lg">{user}</h4>
          <button 
            onClick={logOut}
            className="flex items-center justify-center border-0 bg-transparent text-2xl hover:bg-slate-100">
            <BiExit />
          </button>
        </div>
      </div>
      <div className="header-title">
        <h3>{item?.text}</h3>
      </div>
    </div>
  );
}

export default MainHeader;