import { useState } from 'react';
function Bmi2() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  return (
    <>
      <div>
        身高
        <input
          type="number"
          value={!height ? '' : height}
          placeholder="請輸入身高"
          onChange={(e) => {
            setHeight(Number(e.target.value));
          }}
        />
      </div>
      <div>
        體重
        <input
          type="number"
          value={!weight ? '' : weight}
          placeholder="請輸入體重"
          onChange={(e) => {
            setWeight(Number(e.target.value));
          }}
        />
      </div>
      <button
        onClick={() => {
          setBmi(weight / Math.pow(height / 100, 2));
        }}
      >
        計算
      </button>
      <button
        onClick={() => {
          setWeight(0);
          setHeight(0);
        }}
      >
        清除
      </button>
      {/* toFixed格式化數字用，保留一位小數之後四捨五入 */}
      <p>你的bmi值為{bmi.toFixed(1)}</p>
    </>
  );
}
export default Bmi2;
