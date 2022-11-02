import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
  //抓資料
  const [data, setData] = useState([]);
  //載入等待
  const [isLoading, setIsLoading] = useState(false);

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

  // didMount時載入資料
  useEffect(() => {
    setIsLoading(true);

    getUserData();
    // 延後關掉指示器
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
      {isLoading ? spinner : display}
    </>
  );
}
export default User;
