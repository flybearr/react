// import JsxValue from './ex1026/JsxValue';
import { examples } from './example';
import { useState } from 'react';
// import Menu from './Menu';

function App() {
  const [displayIndex, setDisplayIndex] = useState(0);

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDisplayIndex(Number(e.target.value));
      }}
    >
      {examples.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        );
      })}
    </select>
  );

  // 動態元件語法，注意命名開頭英文一定要大寫
  const MyComponent = examples[displayIndex].component;

  return (
    <>
      {selection}
      <hr />
      <MyComponent />
    </>
  );
}

export default App;
