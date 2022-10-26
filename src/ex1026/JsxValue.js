function JsxValue() {
  return (
    <>
      <h1>JSX 表達式與值</h1>
      <hr />
      <h2>Number</h2>
      {123}
      {NaN}

      <h2>String</h2>
      {'我很好'}
      {`total=${100 - 5}`}

      <h2>Boolean</h2>
      {true}
      {false}

      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}

      <h2>Array</h2>
      {[1, 2, 3, 4]}

      <h2>Object</h2>
      {/* {{a:1,b:2}}   在表達適中用物件會壞掉 */}

      <h2>Function</h2>
      {((a) => {})()}
    </>
  );
}

export default JsxValue;
