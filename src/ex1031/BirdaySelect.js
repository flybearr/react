import { useState } from 'react';
function BirthdaySelect() {
  const [year, setYear] = useState('');
  const [mounth, setMounth] = useState('');
  const [day, setDay] = useState('');
  const [text, setText] = useState('');

  // 製作下拉選單的項目使用的函式
  // params: min: number, max: number
  // return: number[]
  const makeOption = (min, max) => {
    const data = [];
    for (let i = min; i <= max; i++) {
      data.push(i);
    }
    return data;
  };

  return (
    <>
      <span>
        西元
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          <option>請輸入年</option>
          {makeOption(1911, 2010).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
        年
      </span>
      <span>
        <select
          value={mounth}
          onChange={(e) => {
            setMounth(e.target.value);
          }}
        >
          <option>請輸入月</option>
          {/* 酷酷的寫法 用Array搭配fill */}
          {Array(12)
            .fill(0)
            .map((v, i) => {
              return (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
        </select>
        月
      </span>
      <span>
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          <option>請輸入日</option>
          {year !== '' &&
            mounth !== '' &&
            makeOption(1, new Date(year, mounth, 0).getDate()).map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
        </select>
        日
      </span>
      <br></br>
      <button
        onClick={() => {
          if (year === '' || mounth === '' || day === '') {
            alert('請先完成年月日選擇');
            return; //中止程式繼續執行，常用！
          }
          //18年的微秒值
          const ms18year = 568036800000;
          //使用者生日的微秒值
          const msBirthday = +new Date(`${year}/${mounth}/${day}`);
          const msNow = +new Date();

          if (msNow - msBirthday > ms18year) {
            setText('已滿18歲');
          } else {
            setText('未滿18歲');
          }
        }}
      >
        檢查年紀
      </button>
      <hr />
      <p className={text === '已滿18歲' ? 'green' : 'red'}>{text}</p>
    </>
  );
}
export default BirthdaySelect;
