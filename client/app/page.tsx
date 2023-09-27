import Link from 'next/link';
import Image from 'next/image';
import {HiOutlineLogin} from 'react-icons/hi';
import logo from '@/public/logo-light.png';
import '@/styles/landing.scss'

export default function Home() {
  
  return (
    <div className='menu'>
      <Link href='/'>
        <Image src={logo} alt="logo" width={150} priority={true}/>
      </Link>
      <Link href='/login'>
        <HiOutlineLogin className="icon" />
      </Link>
    </div>
  )
}
