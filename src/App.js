import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Milk } from "./components/Milk/Milk";
import { CartContextProvider } from "./store/CartContextProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartContextProvider>
      {cartVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <Milk />
    </CartContextProvider>
  );
}

export default App;
