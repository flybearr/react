import { useEffect, useState } from 'react';
import CC from './CC';
import FC from './FC';

function LifeCycle() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  return (
    <>
      {show1 && <CC></CC>}
      {show2 && <FC></FC>}
      <button
        onClick={() => {
          setShow1(!show1);
        }}
      >
        {show1 ? '移除class元件' : '回復class元件'}
      </button>
      <button
        onClick={() => {
          setShow2(!show2);
        }}
      >
        {show2 ? '移除函式元件' : '回復函式元件'}
      </button>
    </>
  );
}
export default LifeCycle;
