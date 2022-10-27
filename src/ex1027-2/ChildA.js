function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      <p>來自Parent的資料:{props.sendDataToChildA}</p>
    </>
  );
}

export default ChildA;
