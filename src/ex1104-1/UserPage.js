import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import InputIME from './InputIME';
import _ from 'lodash';

function UserPage() {
  //抓資料
  const [data, setData] = useState([]);
  //分成頁面後呈現的資料畫面
  const [displayData, setDisplayData] = useState([]);
  //搜尋
  const [searchWord, setSearchWord] = useState('');
  //載入等待
  const [isLoading, setIsLoading] = useState(true);

  //錯誤訊息
  const [errorMessage, setErrorMessage] = useState('');

  //設定頁數
  const [nowPage, setNowPage] = useState(1);
  //設定每頁幾筆
  const [perPage, setPerPage] = useState(5);
  //設定總頁數
  const [totalPage, setTotalPage] = useState(0);

  //fetch
  const getUserData = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      );

      console.log(response);

      const pageList = _.chunk(response.data, perPage);

      console.log(pageList);

      if (pageList.length > 0) {
        setTotalPage(pageList.length);
        // 記錄分塊後的資料
        setDisplayData(pageList);
        //設定到state裡
        setData(response.data);
      }
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
  const paginationBar = (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#/"
            onClick={() => {
              setNowPage(1);
            }}
          >
            第一頁
          </a>
        </li>
        {Array(totalPage)
          .fill(1)
          .map((v, i) => {
            return (
              <li class="page-item">
                <a
                  class="page-link"
                  href="#/"
                  onClick={() => {
                    setNowPage(i + 1);
                  }}
                >
                  {i + 1}
                </a>
              </li>
            );
          })}
        <li class="page-item">
          <a
            class="page-link"
            href="#/"
            onClick={() => {
              setNowPage(totalPage);
            }}
          >
            最後頁
          </a>
        </li>
      </ul>
    </nav>
  );
  const display = errorMessage ? (
    errorMessage
  ) : (
    <table className="table table-striped table-hover ">
      <thead>
        <tr>
          <th>id</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        {displayData.length > 0 &&
          displayData[nowPage - 1].map((v, i) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );

  return (
    <>
      <div className="col-6 ">
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
        {paginationBar}
      </div>
    </>
  );
}
export default UserPage;
