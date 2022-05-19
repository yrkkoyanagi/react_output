import { createRoot } from 'react-dom/client'
import CalcButton from '../components/CalcButton'
import {Box} from  '@material-ui/core';
import {TextField} from '@material-ui/core';
import { useForm } from "react-hook-form"
import React,{ useState, useEffect, useCallback } from 'react';

const MultiTop = () => {

type FormData = {
	totalAmount : number;
	leaderNumber : number;
	leaderRate : number;
	memberNumber : number;
	memberRate : number;	
	maleNumber : number;
	maleRate : number;
	femaleNumber : number;
	femaleRate : number;
} 

let [collectAmount, setCollect] = useState(0);
let [leaderPay, setLeader] = useState(0);
let [memberPay, setMember] = useState(0);
let [malePay, setMale] = useState(0);
let [femalePay, setFemale] = useState(0);
let [leaderTotal, setLeaderTotal] = useState(0);
let [leaderNumber, setLeaderNumber] = useState(0);
let [memberNumber, setMemberNumber] = useState(0);
let [maleNumber, setMaleNumber] = useState(0);
let [femaleNumber, setFemaleNumber] = useState(0);

 const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
      	let standardValue = data.totalAmount / (data.inputLeaderNumber  * data.leaderRate + data.inputMemberNumber * data.memberRate + data.inputMaleNumber * data.maleRate + data.inputFemaleNumber * data.femaleRate);
     leaderNumber = setLeaderNumber(data.inputLeaderNumber);
     memberNumber = setMemberNumber(data.inputMemberNumber);
          maleNumber = setMaleNumber(data.inputMaleNumber);
     femaleNumber = setFemaleNumber(data.inputFemaleNumber);
  	leaderPay = setLeader(Math.round(standardValue * data.leaderRate/1000)*1000);
  	memberPay = setMember(Math.round(standardValue * data.memberRate/1000)*1000);
  	malePay = setMale(Math.round(standardValue * data.maleRate/1000)*1000);
  	femalePay = setFemale(Math.round(standardValue * data.femaleRate/1000)*1000);
   console.log(leaderPay);
  }

    return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      class="bg-gray-300 w-screen h-screen flex flex-col items-center justify-center space-y-4"
    >
    	<input placeholder="合計金額" {...register("totalAmount")} />
		<div class="sample3">
			<div class="item">リーダー</div>
				<input placeholder="リーダー人数" {...register("inputLeaderNumber")}  />
				<input placeholder="リーダー比率" {...register("leaderRate")}  />		
			<div class="item">メンバー</div>
				<input placeholder="メンバー人数" {...register("inputMemberNumber")} />
				<input placeholder="メンバー比率" {...register("memberRate")} />		
			<div class="item">男性</div>
				<input placeholder="男性人数" {...register("inputMaleNumber")}  />
				<input placeholder="男性比率" {...register("maleRate")}  />		
			<div class="item">女性</div>
				<input placeholder="女性人数" {...register("inputFemaleNumber")}  />
				<input placeholder="女性比率" {...register("femaleRate")}  />		
			</div>
      <input type="submit" value="計算する" />
      <div class="item">集金総額</div>
      <div>リーダーの支払額 {leaderPay} 円 × {leaderNumber}  = {leaderPay * leaderNumber}円</div> 
      <div>メンバーの支払額 {memberPay} 円 × {memberNumber} = {memberPay * memberNumber}円</div>
      <div>男性の支払額 {malePay} 円 × {maleNumber} = {malePay * maleNumber}円</div>
      <div>女性の支払額 {femalePay} 円 × {femaleNumber}= {femalePay * femaleNumber}円</div>
      <div>集金総額 {leaderPay * leaderNumber + memberPay * memberNumber + malePay * maleNumber + femalePay * femaleNumber}円 </div>
    </form>


    )





}

export default MultiTop