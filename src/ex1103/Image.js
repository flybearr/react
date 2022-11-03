import Logo from './logo.svg';
import { imgUrl, imgServerUrl } from '../config/';
function Image() {
  return (
    <>
      <h1>圖片使用說明</h1>
      <hr />
      <h1>1.圖片放src並使用`import`放入</h1>
      <img src={Logo} alt="" width={300} />
      <h1>2.圖片放public使用</h1>
      <img src={`${imgUrl}/images/logo192.png`} alt="" width={100} />
      <img
        src={`${process.env.REACT_APP_DEV_URL}/images/logo192.png`}
        alt=""
        width={100}
      />
      <p>3. 圖片在Node(或其它伺服器上)的public中，用絕對網址存取</p>
      <img
        // 套用config/index.js中的設定值
        src={`${imgServerUrl}/uploads/anya-300-03.png`}
        alt=""
        width="100"
        height="100"
      />
      <p>
        4. 圖片在node(或其它伺服器上)的public中，用第3種的伺服器方式存取(!!注意:
        開發用，而且需先設定proxy)
      </p>
      {/* // 另外安裝 `yarn add http-proxy-middleware` 
          https://create-react-app.dev/docs/proxying-api-requests-in-development/
      */}
      <img
        src={`${imgUrl}/uploads/anya-300-03.png`}
        alt=""
        width="100"
        height="100"
      />
    </>
  );
}
export default Image;
