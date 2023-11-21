import React, { useState } from 'react'
import FormInputGroup from './FormInputGroup'
import { FaDollarSign } from "react-icons/fa6";

function Form() {
  const [homeValue, setHomeValue]= useState("");
  const [downPayment, setDownPayment]= useState("");
  const [loanAmount, setLoanAmount]= useState("");
  const [interestRate, setInterestRate]= useState("");
  const [loanDuration, setLoanDuration]= useState("");
  const [monthlyPayment, setMonthlyPayment]= useState(0);

  // calculam valoarea lui loan amount prin homevalue minus downpayment
  function calculateLoanAmount() {
    setLoanAmount(homeValue-downPayment);
    return loanAmount;
  }

  function calculateMonthlyPayment() {
    function precentageToDecimal(percent) {
      return percent / 12 /100;
    }
    function yearsToMonths(year) {
      return year * 12;
    }
    // luam percentageToDecimal si ii pasam interestRate inmultit cu loanAmount. luam procentajul lui pcdecimal de intRate la puterea minus yearstoMonths
    setMonthlyPayment( precentageToDecimal(interestRate * loanAmount)/ (1 - Math.pow(1+ precentageToDecimal(interestRate), -yearsToMonths(loanDuration))) );

    console.log(monthlyPayment);
    return monthlyPayment;
  }

  return (
    <form onSubmit={(evt) => evt.preventDefault()}>

    <FormInputGroup 
    text= "Home Value" 
    icon= {<FaDollarSign />} 
    placeholder= "Enter the value of the home"
    onKeyUp={calculateLoanAmount} 
    value={homeValue}
    // inputu-ul va asculta de eveniment si va lua valoarea lui home value care va fi inserata in functia noastra care calculeaza loan amount
    onInput={(evt) => setHomeValue(evt.target.value)}
    />

    <FormInputGroup 
    text= "Down Payment" 
    icon= {<FaDollarSign />} 
    placeholder= "Enter your funds" 
    onKeyUp={calculateLoanAmount}
    value={downPayment}
    onInput={(evt) => setDownPayment(evt.target.value)}
    />

    <FormInputGroup 
    text= "Loan Amount" 
    icon= {<FaDollarSign />} 
    placeholder= "Funds nedeed" 
    readOnly= {true}
    value={loanAmount}
    />

    <FormInputGroup 
    text= "Interest Rate %" 
    placeholder= "Enter your interest rate" 
    value={interestRate}
    onInput={(evt) => setInterestRate(evt.target.value)}
    />

    <FormInputGroup 
    text= "Loan duration (years)" 
    placeholder= "Enter the duration of loan in years" 
    value={loanDuration}
    onInput={(evt) => setLoanDuration(evt.target.value)}
    />
    
      <h4 className='alert alert-info fw-bold'>  Monthly Payment <FaDollarSign />
        {parseFloat(monthlyPayment.toFixed(2))}
      </h4>

      <button type='submit' 
      className='btn btn-primary btn-lg w-100 center' 
      onClick={calculateMonthlyPayment}>
      {""}
      Calculate
      </button>

    </form>
  )
}

export default Form

