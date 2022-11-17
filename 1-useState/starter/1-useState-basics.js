import React,{ useState } from "react";


const Index = () => {
  const [count,setCount]=useState(0);

 const  ondecrementcount=()=>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={ondecrementcount}>-</button>
    </div>
  );
};

export default Index;
