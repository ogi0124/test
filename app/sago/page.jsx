'use client'
/*import Link from "next/link"

export default function Home() {
  let name = "park"
  return (
    <div>
      <h4 className="title" style={{fontSize : '30px'}}>애플후래시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}*/


/*import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  return (
    <ul className="my-auto">
      {countries?.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}*/


import React from 'react';
import ReactDOM from 'react-dom';
export default function Index() {
    const [inputValue, setInputValue] = React.useState('');

    const showInput = function(){
        const inputElement = document.getElementById("userInput")
        const inputValue = inputElement.value
        setInputValue(inputValue)
    }
    /*async function postData(url, data) {
        // 옵션 기본 값은 *로 강조
        const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE 등
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
        });
        return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
    }
  
  postData('https://example.com/answer', { inputValue }).then((data) => {
    console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
  });*/
  
  return (
  <div>
    <input type="text" id="userInput" placeholder="질문을 하시오"/>
    <button className="border-black border-2 px-1" onClick={showInput}>제출</button>
    <div>{"질문: "+ inputValue}</div>
    <div>답변:</div>
  </div>
  )
  }