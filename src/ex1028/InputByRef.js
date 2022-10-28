import { useRef } from 'react';

function InputByRef() {
  //{ current: null }
  const inputRef = useRef(null);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'test@gmail.com';
        }}
      >
        載入資料
      </button>
    </>
  );
}

export default InputByRef;
