import React, { useEffect, useState, Button } from "react";

function App() {
  const button = () => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/data")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="App">
      <p>시발련zsddfasdfafsadfz</p>

      <button onClick={button}>버튼임</button>
      <p>임시텍스트</p>
      <header className="App-header">{data ? <p>{data.message}</p> : <p>Loading...</p>}</header>
    </div>
  );
}

export default App;
