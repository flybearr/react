import { useState } from 'react';

function Bmi() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  let tempH = 0;
  return (
    <>
      <label>請輸入身高</label>
      <input
        type="text"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <label>請輸入體重</label>
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <button
        onClick={() => {
          tempH = Math.pow(height / 100, 2);
          setBmi((weight / tempH).toFixed(3));
        }}
      >
        按我轉換
      </button>
      <div>你的BMI為{bmi}</div>
    </>
  );
}

export default Bmi;
