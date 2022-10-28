import React, { useState } from 'react';
import InputById from './InputByid';
import InputByRef from './InputByRef';

function InputDemo() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h1>可控表單</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setInputValue('test@gmail.com');
        }}
      >
        仔入資料
      </button>
      <hr />
      <h1>不可控表單元件(id)</h1>
      <InputById />
      <InputById />
      <hr />
      <h1>不可控表單元件(ref)</h1>
      <InputByRef />
      <InputByRef />
    </>
  );
}

export default InputDemo;
