import "./components/category-item/category-item.component";
import { Routes, Route } from "react-router-dom";
import Navigator from "./components/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Authentification from "./components/routes/authentification/authentification.component";
import { useState } from "react";

const App = () => {
  const Shop = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      console.log(setCount((count) => count + 1));
    };

    return (
      <div>
        <h1>This is a shop store!</h1>
        <button onClick={handleClick}>Count: {count}</button>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentification />} />
      </Route>
    </Routes>
  );
};

export default App;
