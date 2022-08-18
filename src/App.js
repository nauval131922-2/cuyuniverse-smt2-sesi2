import React, { useState, useEffect } from "react";
// import Introduction from "./components/introduction";
// import Profile from "./components/profile";

function App() {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [namaPacar, setNamaPacar] = useState("");

  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("JODI");
    } else {
      setNamaPacar("uhuy");
    }

    if (pacarSaya <= 0) {
      setPacarSaya(0);
      setNamaPacar("");
    }
  }, [pacarSaya]);

  return (
    <div>
      <h5>nama pacar: {namaPacar}</h5>
      <h1>saya memiliki: {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>tambah pacar</button>
      <button onClick={() => setPacarSaya((prev) => prev - 1)}>putuskan pacar</button>
    </div>
  );
}

export default App;
