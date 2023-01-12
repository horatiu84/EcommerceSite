import "./components/category-item/category-item.component";
import { Routes, Route } from "react-router-dom";
import Navigator from "./components/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import SignIn from "./components/routes/signin/signin.component";

const App = () => {
  const Shop = () => {
    return <h1>This is a shop store!</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
