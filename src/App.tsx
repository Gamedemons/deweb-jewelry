// import { useState } from "react";

// import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes> */}

      <HomePage></HomePage>

      
      
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
    </>
  );
}

export default App;
