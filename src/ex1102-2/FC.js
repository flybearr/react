import { useState, useEffect } from 'react';
function FC() {
  const [total, setTotal] = useState(0);
  // 模擬didmount
  useEffect(() => {
    console.log('模擬didmount');
  }, []);
  // 模擬didmount + didUpdate
  useEffect(() => {
    console.log('模擬didUpdate');
  }, [total]);
  //模擬didUpdate
  useEffect(() => {
    if (total !== 0) console.log('模擬didUpdate(ㄇ)');
  }, [total]);
  //模擬WillUnmount
  useEffect(() => {
    return () => {
      console.log('模擬WillUnmount');
    };
  });
  return (
    <>
      {console.log('render')}
      <h1>函式元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
    </>
  );
}
export default FC;
