"use client"
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import '@/styles/auth.scss';

type Inputs = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  secondName: string,
  phone: string
};

function Page() {
  const router = useRouter();
  const {register, handleSubmit, formState: { errors }} = useForm<Inputs>();

  const isEmail = (email: string) => {
    if(email.includes("@") && email.includes(".") && email.length > 5) return true;

    return false;
  }

  const isPhone = (phone: string) => {  
    if(phone.length > 9 && phone.length < 13) return true;

    return false;
  }

  const submit: SubmitHandler<Inputs> = async (data) => {
    try{
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
    <form onSubmit={handleSubmit(submit)} className="login-form">
      <h4 className="text-slate-500 text-lg font-bold">Регистрация</h4>
      <div className="input-box">
        <input
          {...register("lastName", { required: true, minLength: 3, maxLength: 20 })}
          type="text" 
          placeholder="Фамилия" />
          {errors.lastName && errors.lastName.type === 'required' && <span>Фамилия обязательна</span>}
          {errors.lastName && errors.lastName.type === 'minLength' && <span>Минимум 3 символа</span>}
          {errors.lastName && errors.lastName.type === 'maxLength' && <span>Максимум 20 символов</span>}
      </div>
      <div className="input-box">
        <input
          {...register("firstName", { required: true, minLength: 3, maxLength: 20 })}
          type="text" 
          placeholder="Имя" />
          {errors.firstName && errors.firstName.type === 'required' && <span>Имя обязательно</span>}
          {errors.firstName && errors.firstName.type === 'minLength' && <span>Минимум 3 символа</span>}
          {errors.firstName && errors.firstName.type === 'maxLength' && <span>Максимум 20 символов</span>}
      </div>
      <div className="input-box">
        <input 
          {...register("secondName", { required: true, minLength: 3, maxLength: 20 })}
          type="text" 
          placeholder="Отчество" />
          {errors.secondName && errors.secondName.type === 'required' && <span>Отчество обязательно</span>}
          {errors.secondName && errors.secondName.type === 'minLength' && <span>Минимум 3 символа</span>}
          {errors.secondName && errors.secondName.type === 'maxLength' && <span>Максимум 20 символов</span>}
      </div>
      <div className="input-box">
        <input
          {...register("phone", { required: true, validate: isPhone })}
          type="text" 
          placeholder="Телефон" />
          {errors.phone && errors.phone.type === 'required' && <span>Телефон обязателен</span>}
          {errors.phone && errors.phone.type === 'validate' && <span>Неверный формат телефона</span>}
      </div>
      <div className="input-box">
        <input
          {...register("email", { required: true, validate: isEmail })}
          type="text" 
          placeholder="Email" />
          {errors.email && errors.email.type === 'required' && <span>Email обязателен</span>}
          {errors.email && errors.email.type === 'validate' && <span>Неверный формат email</span>}
      </div>
      <div className="input-box">
        <input
          {...register("password", { required: true, minLength: 3, maxLength: 20 })}
          type="text" 
          placeholder="Password" />
          {errors.password && errors.password.type === 'required' && <span>Пароль обязателен</span>}
          {errors.password && errors.password.type === 'minLength' && <span>Минимум 3 символа</span>}
          {errors.password && errors.password.type === 'maxLength' && <span>Максимум 20 символов</span>}
      </div>
      <div className="text-indigo-600 self-end">
        <Link href="/login">Войдите</Link>
      </div>
      <div className="btn-box">
        <button type='submit'>Отправить</button>
      </div>
    </form>
  );
}

export default Page;