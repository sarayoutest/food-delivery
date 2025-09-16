import { createContext, useEffect, useState } from "react";

import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addCart = (itemid) => {
    if (!cartItem[itemid]) {
      setCartItem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removeFormCart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addCart,
    removeFormCart,
  };
  useEffect(() => {}, [cartItem]);
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
