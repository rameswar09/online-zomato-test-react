import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { myTestAction } from "../../store/action";

const Mytest1 = () => {
  const data = useSelector((state) => state.myTest.data);
  const dispatch = useDispatch();

  console.log(data);

  const callDb = () => {
    console.log("this is callDb");
    // dispatch(myTestAction.testActon.storeData(["Ram", "Hari"]));
    dispatch(myTestAction.getData())
  };
  const MapData = data.map((element) => {
    return <p>{element.title}</p>;
  });
  return (
    <div>
      hello this is Mytest1
      {MapData}
      <button onClick={callDb}>Click me</button>
    </div>
  );
};

export default Mytest1;
