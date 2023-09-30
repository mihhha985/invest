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
  const [error, setError] = useState<string>("");

  const login = async () => {
    try{
      const data = {
        email,
        password,
      }

      const response = await axios.post(process.env.API_URL + "/user/login", data);
      if(response.status === 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/main");
      }
    } catch(e) {
      setEmail("");
      setPassword("");
      setError("Неверный логин или пароль");
    }
  }

  return ( 
    <div className="login-form">
      <h4 className="text-slate-500 text-lg font-bold">Авторизация</h4>
      {error && <div className="error-box">{error}</div>}
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
      <div className="input-box">
        <input type="password" placeholder="Код авторизации" />
        <h6>Если включена двухфакторная авторизация</h6>
      </div>
      <div className="w-full flex justify-between text-indigo-600">
        <Link href="/restore">Забыли пароль?</Link>
        <Link href="/register">Регистрация</Link>
      </div>
      <div className="btn-box">
        <button onClick={login}>Войти</button>
      </div>
    </div>
  );
}

export default Page;