import { useState } from 'react';
function Child({ increment = 1 }) {
  const [total, setTotal] = useState(0);
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + increment);
        }}
      >
        {total}
      </h1>
    </>
  );
}

export default Child;
