import { createRoot } from 'react-dom/client'
import CalcButton from '../components/CalcButton'
import {Box} from  '@material-ui/core';
import {TextField} from '@material-ui/core';
import { useForm } from "react-hook-form"
import React, { useState } from 'react';

const HookTop = () => {

type FormData = {
	totalAmount : number;
	partySize : number;
} 

let [result, setResult] = useState(0);
    
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    result = setResult(data.totalAmount / data.partySize)
  }

    return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      class="bg-gray-300 w-screen h-screen flex flex-col items-center justify-center space-y-4"
    >
      <input placeholder="合計金額" {...register("totalAmount")} />
      <input placeholder="人数" {...register("partySize")} />
      <input type="submit" />
      <p>一人当たりの支払額 {result}円 </p>

    </form>

    )
}

export default HookTop