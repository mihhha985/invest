"use client"
import { useState, useRef, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import {BsFillSendFill, BsFillSendExclamationFill, BsFillSendCheckFill} from 'react-icons/bs';
import { useForm, SubmitHandler } from "react-hook-form"
import Link from 'next/link';
import axios from 'axios';
import '@/styles/auth.scss';

const sendcode = Math.floor(100000 + Math.random() * 900000).toString();
type SendType = "send" | "error" | "success";
type Inputs = {
  password: string,
  confirmPassword: string
};

function Page() {
  console.log(sendcode);
  const router = useRouter();
  const codeRef = useRef<HTMLInputElement>(null);
  const [userId, setUserId] = useState<number|null>(null); // TODO: [M] [R] [L] [O] [P] [T] [V] [W] [X] [Y] [Z
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [codeError, setCodeError] = useState<boolean>(false);
  const [sendType, setSendType] = useState<SendType>("send");
  const [passwordForm, setPasswordForm] = useState<boolean>(false); 
  const [passwordFormError, setPasswordFormError] = useState<boolean>(false);
  const {register, handleSubmit, formState: { errors }} = useForm<Inputs>();

  const sendCode = async (e:any) => {
    const target = e.currentTarget;
    target.disabled = true;
    const data = {
      email:email,
      code:sendcode,
    }

    try{
      const response = await axios.post(process.env.API_URL + "/user/restore", data);
      console.log(response);
      if(response.status === 201) {
        target.disabled = false;
        setSendType("success");
        setUserId(response.data);
        if(codeRef.current !== null) {
          codeRef.current.focus();
          codeRef.current.select();
          codeRef.current.disabled = false;
        }
      }
    } catch(e) {
      console.log(e);
      target.disabled = false;
      setSendType("error");
    }
  }

  const checkCode = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length === 6) {
      if(e.target.value === sendcode) {
        setCodeError(false);
        setPasswordForm(true);
      } else {
        setPasswordForm(false);
        setCodeError(true);
      }
    } 

    setCode(e.target.value);
  }

  const submit: SubmitHandler<Inputs> = async (data:Inputs) => {
    if(data.password === data.confirmPassword && userId !== null){
      try{
        const response = await axios.post(process.env.API_URL + "/user/restore/" + userId, data);
        if(response.status === 201) {
          router.push("/login");
        }
      } catch(e) {
        console.log(e);
      }
    }else{
      setPasswordFormError(true);
    }
  }

  if(passwordForm){
    return ( 
      <form onSubmit={handleSubmit(submit)} className="login-form">
        <h4 className="text-slate-500 text-lg font-bold">Востановить пароль</h4>
        {passwordFormError && <h6 className='text-red-600 ml-2 self-start'>Пароли не совпадают</h6>}
        <div className="input-box">
          <input
            {...register("password", { required: true, minLength: 3, maxLength: 20 })}
            type="text" 
            placeholder="Password" />
            {errors.password && errors.password.type === 'required' && <span>Пароль обязателен</span>}
            {errors.password && errors.password.type === 'minLength' && <span>Минимум 3 символа</span>}
            {errors.password && errors.password.type === 'maxLength' && <span>Максимум 20 символов</span>}
        </div>
        <div className="input-box">
          <input
            {...register("confirmPassword", { required: true, minLength: 3, maxLength: 20})}
            type="text" 
            placeholder="Confirm Password" />
            {errors.confirmPassword && errors.confirmPassword.type === 'required' && <span>Пароль обязателен</span>}
            {errors.confirmPassword && errors.confirmPassword.type === 'minLength' && <span>Минимум 3 символа</span>}
            {errors.confirmPassword && errors.confirmPassword.type === 'maxLength' && <span>Максимум 20 символов</span>}
        </div>
        <div className="text-indigo-600 self-end">
          <Link href="/login">Назад</Link>
        </div>
        <div className="btn-box">
          <button type='submit'>Отправить</button>
        </div>
      </form>
    );
  }else{
    return ( 
      <div className="login-form">
        <h4 className="text-slate-500 text-lg font-bold">Востановить пароль</h4>

        {sendType === 'send' && 
          <h6 className='text-slate-600 ml-2 self-start'>Введите email который указывали при регистрации</h6>
        }

        {sendType === 'error' && 
          <h6 className='text-red-600 ml-2 self-start'>Пользователь с таким email не зарегистрирован!!!</h6>
        }

        {sendType === 'success' && 
          <h6 className='text-slate-600 ml-2 self-start'>Введите код, который пришёл на ваш email</h6>
        }

        <div className="input-box">
          <button 
            onClick={sendCode}
            className="send-email text-indigo-600 text-xl p-2 rounded-sm hover:bg-indigo-300 hover:bg-opacity-10">
            {sendType === 'send' && <BsFillSendFill />}
            {sendType === 'error' && <BsFillSendExclamationFill />}
            {sendType === 'success' && <BsFillSendCheckFill />}
          </button>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text" 
            placeholder="Email" />
        </div>
        <div className="input-box">
          <input 
            ref={codeRef}
            onChange={checkCode}
            value={code}
            type="text" 
            placeholder="Код(6 цифр)" 
            disabled={true}/>
            {codeError && <span className="text-red-600 ml-2 self-start">Неверный код</span>}
        </div>
        <div className="self-start text-indigo-600">
          <Link href="/login">Назад</Link>
        </div>
      </div>
    );
  }
}

export default Page;