import './Menu.css';
import { useState } from 'react';
function Menu() {
  const obj = ['首頁', '關於我們', '產品'];
  const [addClass, setAddClass] = useState(0);
  return (
    <>
      <ul>
        {obj.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setAddClass(v);
              }}
            >
              <a href="#/" className={addClass === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
