"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import '@/styles/auth.scss';

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const register = async () => {
    try{
      const data = {
        email,
        password,
        firstName,
        lastName,
        secondName,
        phone
      }

      const response = await axios.post(process.env.API_URL + "/user/register", data);
      if(response.status === 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/main");
      }
    } catch(e) {
      console.log(e);
    }
  }

  return ( 
    <div className="login-form">
      <h4 className="text-slate-500 text-lg font-bold">Регистрация</h4>
      <div className="input-box">
        <input
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
          type="text" 
          placeholder="Фамилия" />
      </div>
      <div className="input-box">
        <input
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          type="text" 
          placeholder="Имя" />
      </div>
      <div className="input-box">
        <input 
          value={secondName} 
          onChange={(e) => setSecondName(e.target.value)}
          type="text" 
          placeholder="Отчество" />
      </div>
      <div className="input-box">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)} 
          type="text" 
          placeholder="Телефон" />
      </div>
      <div className="input-box">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          type="text" 
          placeholder="Email" />
      </div>
      <div className="input-box">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          placeholder="Password" />
      </div>
      <div className="text-indigo-600 self-end">
        <Link href="/login">Есть аккаунт? Войдите.</Link>
      </div>
      <div className="btn-box">
        <button onClick={register}>Отправить</button>
      </div>
    </div>
  );
}

export default Page;