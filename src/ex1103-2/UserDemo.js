import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import InputIME from './InputIME';
import _ from 'lodash';

function UserDemo() {
  //抓資料
  const [data, setData] = useState([]);
  //搜尋
  const [searchWord, setSearchWord] = useState('');
  //載入等待
  const [isLoading, setIsLoading] = useState(true);

  //錯誤訊息
  const [errorMessage, setErrorMessage] = useState('');

  //fetch
  const getUserData = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      );
      console.log(response);
      //設定到state裡
      setData(response.data);
    } catch (e) {
      //錯誤處理
      console.error(e.message);
      setErrorMessage(e.message);
    }
  };
  const getUsersBySearchWord = async (keyword) => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' +
          keyword
      );
      //設定到state裡
      setData(response.data);
    } catch (e) {
      // 錯誤處理
      console.error(e.message);
      setErrorMessage(e.message);
    }
  };
  // 處理過濾的函式
  const handleSearch = (keyword) => {
    // 檢查，當都沒輸入時回復原本data
    if (keyword === '') {
      getUserData();
      return;
    }

    getUsersBySearchWord(keyword);
  };

  // debounce function + useCallback
  // 用途: 當不斷輸入input時，同一時間內要先停止觸發事件，直到輸入停止，400ms為等待時間
  // 使用debounce的主因，是因項目呈現、退場動畫、重新排位動畫三者均需計算與時間
  // 觸發太頻繁時，會造成動畫卡頓或卡住的現象
  const debounceHandleSearch = useCallback(_.debounce(handleSearch, 400), []);

  const handleChange = (e) => {
    // 可控元件綁用state使用
    setSearchWord(e.target.value);

    // 搜尋用 - trim去除空白，toLowerCase轉小寫英文
    const newSearchWord = e.target.value.trim().toLowerCase();

    // 傳至debounceFn中
    debounceHandleSearch(newSearchWord);
  };

  // didMount時載入資料
  useEffect(() => {
    getUserData();
  }, []);
  // 延後1.5秒才關掉指示器
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  //載入動畫
  const spinner = (
    <>
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  );

  const display = errorMessage ? (
    errorMessage
  ) : (
    <div className="col-6 m-auto">
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <h1>會員資料</h1>
      <hr />
      <h1>debounce反彈跳</h1>
      <hr />
      <InputIME value={searchWord} onChange={handleChange} />
      <hr />
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setIsLoading(true);

          getUsersBySearchWord(searchWord);

          // 延後1.5秒才關掉指示器
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }}
      >
        搜尋
      </button>
      <hr />

      {isLoading ? spinner : display}
    </>
  );
}
export default UserDemo;
