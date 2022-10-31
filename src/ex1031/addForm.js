import { useState } from 'react';

function Addform({ addTodo }) {
  const [inputValue, setInputValue] = useState('');
  const [isComposition, setIsComposition] = useState(false);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        // 中文輸入法用
        onCompositionStart={() => {
          setIsComposition(true);
        }}
        onCompositionEnd={() => {
          setIsComposition(false);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && isComposition === false) {
            addTodo(e.target.value);
            setInputValue('');
          }
        }}
      />
    </>
  );
}

export default Addform;
