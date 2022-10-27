import ChildA from './ChildA';
import ChildB from './ChildB';
import { useState } from 'react';
function Parent() {
  //給ChildA
  const [dataChildA, setdataChildA] = useState('這是給ChildA的禮物');

  //從ChildB來的 (需用callback)
  const [dataChildB, setdataChildB] = useState('');

  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB的資料: {dataChildB}</p>
      <hr />
      <ChildA sendDataToChildA={dataChildA} />
      <ChildA sendDataToChildA={dataChildB} />
      <ChildB getDataFromParent={setdataChildB} />
    </>
  );
}

export default Parent;
