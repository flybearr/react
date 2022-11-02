import { useState, useRef, useEffect } from 'react';

function HTML5validForm() {
  //
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  //設定checkbox type
  const [show, setShow] = useState(false);
  //設定錯誤訊息的state
  const [failMessage, setFailMessage] = useState({
    username: '',
    email: '',
    password: '',
  });

  //讓欄位錯誤時，會自動focus到該欄位上
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const handleFormSubmit = (e) => {
    // 阻擋預設form送出的行為
    e.preventDefault();

    // 得到輸入值的方式
    // 第1種，從state直接得到
    console.log(user);

    // 第2種，用FormData物件
    const formData = new FormData(e.target);
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    );

    // 其它驗証…修改

    // 送到伺服器
  };
  const handleFormInvalid = (e) => {
    // 阻擋預設行為 - 關閉泡泡訊息
    e.preventDefault();

    setFailMessage({
      ...failMessage,
      [e.target.name]: e.target.validationMessage,
    });
  };
  const handleFormChange = (e) => {
    //要把目前正在修改的欄位的錯誤訊息先清空
    setFailMessage({
      ...failMessage,
      [e.target.name]: '',
    });
  };

  // 全部自訂寫法，簡單幾個欄位時可用，過多欄位請用專用表單套件如react hook form. formik
  // 如果有錯誤訊息時對照focus到某欄位
  useEffect(() => {
    // 一開始focus到帳號欄位
    if (!failMessage.username && !failMessage.email && !failMessage.password) {
      usernameRef.current.focus();
      return;
    }

    if (failMessage.username) {
      usernameRef.current.focus();
      return;
    }

    if (failMessage.email) {
      emailRef.current.focus();
      return;
    }

    if (failMessage.password) {
      passwordRef.current.focus();
      return;
    }
  }, [failMessage]);
  return (
    <>
      <form
        onInvalid={handleFormInvalid}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
      >
        <label>帳號</label>
        <input
          type="text"
          name="username"
          ref={usernameRef}
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span>{failMessage.username}</span>
        <br></br>
        <label>email</label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span>{failMessage.email}</span>
        <br></br>
        <label>密碼</label>
        <input
          type={show ? 'text' : 'password'}
          name="password"
          ref={passwordRef}
          value={user.password}
          onChange={handleFieldChange}
          required
        />
        <span>{failMessage.password}</span>
        <input
          type="checkbox"
          name="show"
          checked={show}
          onChange={() => {
            setShow(!show);
          }}
        />
        <label>顯示密碼</label>
        <br></br>
        <button type="submit">送出</button>
        {/* button 沒加type 相當於 submit */}
        <button
          type="button"
          onClick={() => {
            setUser({
              username: 'good0331',
              email: 'good0331@123',
              password: 'asd12345',
            });
          }}
        >
          填資料
        </button>
      </form>
    </>
  );
}
export default HTML5validForm;
