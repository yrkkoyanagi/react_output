import { createRoot } from 'react-dom/client'
import CalcButton from '../components/CalcButton'
import {Box} from  '@material-ui/core';
import {TextField} from '@material-ui/core';
import { useForm } from "react-hook-form"
import React,{ useState, useEffect, useCallback } from 'react';
import "../style.css";

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
      class=""
    >
        <div class="item-box">
            <div class="item-title">????????????</div>
    	    <input type="number" placeholder="????????????" {...register("totalAmount")} />
			    <div class="item-title">????????????</div>
			        <div>
				    <input type="number" placeholder="??????????????????" {...register("inputLeaderNumber")}  />
				    </div>
				    <div>
				    <input type="number" placeholder="??????????????????" {...register("leaderRate")}  />	
				    </div>
			<div class="item-title">????????????</div>
			    <div>
				<input type="number" placeholder="??????????????????" {...register("inputMemberNumber")} />
				</div>
				<div>
				<input type="number" placeholder="??????????????????" {...register("memberRate")} />	
				</div>
			<div class="item-title">??????</div>
			    <div>
				<input type="number" placeholder="????????????" {...register("inputMaleNumber")}  />
				</div>
				<div>
				<input type="number" placeholder="????????????" {...register("maleRate")}  />		
				</div>
			<div class="item-title">??????</div>
			    <div>
				<input type="number" placeholder="????????????" {...register("inputFemaleNumber")}  />
				</div>
				<div>
				<input type="number" placeholder="????????????" {...register("femaleRate")}  />	
				</div>
	</div>	
      <input type="submit" value="????????????" />
      <div class="item-title">????????????</div>
      <div class="result-text">???????????????????????? {leaderPay} ??? ?? {leaderNumber}  = {leaderPay * leaderNumber}???</div> 
      <div class="result-text">???????????????????????? {memberPay} ??? ?? {memberNumber} = {memberPay * memberNumber}???</div>
      <div class="result-text">?????????????????? {malePay} ??? ?? {maleNumber} = {malePay * maleNumber}???</div>
      <div class="result-text">?????????????????? {femalePay} ??? ?? {femaleNumber}= {femalePay * femaleNumber}???</div>
      <div class="result-text">???????????? {leaderPay * leaderNumber + memberPay * memberNumber + malePay * maleNumber + femalePay * femaleNumber}??? </div>
    </form>


    )





}

export default MultiTop