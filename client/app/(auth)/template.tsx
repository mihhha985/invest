import Image from "next/image";
import logo from "@/public/logo-light.png";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-100">
      <div className="mb-5">
        <Image src={logo} alt="logo"  width={200} priority={true}/>
      </div>
      {children}
    </div>
  );
}