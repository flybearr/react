import { useState } from 'react';
function ChildB(props) {
  const [childBData, setChildBData] = useState('爸媽你好');
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          setChildBData('爸媽你好嗎?');
        }}
      >
        更改資料
      </button>
      <button
        onClick={() => {
          props.getDataFromParent(childBData);
        }}
      >
        傳送傳送資料給爸媽
      </button>
    </>
  );
}

export default ChildB;
