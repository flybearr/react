import { useState } from 'react';
import './howoldareyou.css';
function HowOldAreYou() {
  const [year, setYear] = useState(2010);
  const yearList = [];

  for (let i = 2010; i >= 1920; i--) {
    yearList.push(i);
  }

  const [mounth, setMounth] = useState(1);
  const mounthList = [];
  for (let i = 1; i <= 12; i++) {
    mounthList.push(i);
  }

  const days = new Date(year, mounth, 0).getDate();

  const [day, setDay] = useState(1);
  const dayList = [];
  for (let i = 1; i <= days; i++) {
    dayList.push(i);
  }

  const userDate = +new Date(year, mounth, day);
  const nowTime = +new Date();
  let checkOld = (nowTime - userDate) / 365.25 / 24 / 60 / 60 / 1000;

  return (
    <>
      <label>請輸入你的出生年月日</label>
      <br></br>
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        {yearList.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      {/* -------------------------------- */}
      <select
        value={mounth}
        onChange={(e) => {
          const Mvalue = e.target.value;
          setMounth(Mvalue);
        }}
      >
        {mounthList.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      {/* --------------------------------- */}

      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
        }}
      >
        {dayList.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
        {}
      </select>

      <h2 className={checkOld > 18 ? 'green' : 'red'}>
        {checkOld > 18 ? '滿18' : '未滿18'}
      </h2>
    </>
  );
}
export default HowOldAreYou;
