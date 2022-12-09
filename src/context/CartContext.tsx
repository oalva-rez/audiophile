import { useState, createContext, useContext } from "react";
import data from "../../data.json";
import Data from "../interfaces/Data";

type CartProviderProps = {
  children: React.ReactNode;
};

const CartContext = createContext<React.SetStateAction<Data[]> | null>(null);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState(data);

  return (
    <CartContext.Provider value={[products, setProducts]}>
      {children}
    </CartContext.Provider>
  );
}
